import React, { Component } from 'react'
import { parse } from 'qs'
import web3 from '../web3'
import { ethRegistrar, deedContract } from '../ensutils'
import moment from 'moment'

const Check = ({ location, match }) => {
  const query = parse(location.search.substr(1))
  const name = query.domain.split('.')[0]
  const availability = parseInt(ethRegistrar.entries(web3.sha3(name))[0].toString())
  let content = null
  console.log(availability)
  switch (availability) {
    case 0:
      content = <div>Domain is available!</div>
      break;
    case 1:
      let owner = deedContract.at(ethRegistrar.entries(web3.sha3(name))[1]).owner();
      let amount = web3.fromWei(ethRegistrar.entries(web3.sha3(name))[4], 'ether');
      let dateEnds = new Date(ethRegistrar.entries(web3.sha3(name))[2].toNumber() * 1000)
      let auctionEnd = moment(dateEnds)
      let revealBegins = moment(dateEnds).subtract(2, 'days')
      let stage
      let revealInfo = null
      let timeLeft
      if(moment().isBefore(revealBegins)){
        stage = 'bid'
        let hours = revealBegins.diff(moment(), 'hours')
        timeLeft = <div>{hours} hours left til the reveal stage starts</div>
      } else if(moment().isAfter(revealBegins)){
        stage = 'reveal'
        let hours = revealBegins.diff(moment(), 'hours')
        timeLeft = <div>{hours} hours left til auction end</div>
        revealInfo = <div>
          Current winner is: {JSON.stringify(owner)}
          Current winning bid is: {JSON.stringify(amount)}
        </div>
      }



      content = <div>Domain is currently up for auction and in the {stage} stage
        <div>{timeLeft}</div>
        <div>Reveal begins: {revealBegins.format("dddd, MMMM Do YYYY, h:mm:ss a")}</div>
        <div>Auction begins: {auctionEnd.format("dddd, MMMM Do YYYY, h:mm:ss a")}</div>
        {revealInfo}
      </div>
      break;
    case 5:
      content = <div>Domain is not available to bid yet!</div>
      break;
    default:
      content = <div>Domain is taken!</div>
      break;
  }
  return <div>
    <div>{content}</div>
  </div>
}

export default Check
