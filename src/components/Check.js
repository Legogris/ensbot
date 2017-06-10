import React from 'react'
import { parse } from 'qs'
import web3 from '../web3'
import { ethRegistrar } from '../ensutils'

const Check = ({ location, match }) => {
  const query = parse(location.search.substr(1))
  const name = query.domain
  const availability = parseInt(ethRegistrar.entries(web3.sha3(query.domain))[0].toString(), 10)
  let content = null
  console.log(availability)
  switch (availability) {
    case 0:
      content = <div>{name} is available!</div>
      break;
    case 1:
      content = <div>{name} is currently up for auction!</div>
      break;
    case 5:
      content = <div>{name} is not available to bid yet!</div>
      break;
    default:
      content = <div>{name} is taken!</div>
      break;
  }
  return <div>
    <div>{content}</div>
  </div>
}

export default Check
