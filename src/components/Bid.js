import React, { Component } from 'react'
import { parse } from 'qs'
import { ethRegistrar } from '../ensutils'
import web3 from '../web3'
import Loader from 'react-loader'

class Bid extends Component {
  constructor(){
    super()
    this.state = {
      started: false,
      pending: false,
      txId: ""
    }
  }
  render(){
    let { match, location } = this.props
    const query = parse(location.search.substr(1))
    let txId = ""
    let { domain, bidAmount, secret, value } = query
    let split = domain.split('.'),
        name;
        name = split[0]

    if(this.state.started === false){
      let bid = ethRegistrar.shaBid(web3.sha3(name), web3.eth.accounts[0], web3.toWei(bidAmount, 'ether'), web3.sha3(secret));
      txId = ethRegistrar.newBid(bid, {from: web3.eth.accounts[0], value: web3.toWei(2, value), gas: 500000});
      this.setState({
        started: true,
        txId
      })
      let interval = setInterval(()=>{
        let tx = web3.eth.getTransaction(txId)
        if(tx.blockNumber !== null){
          this.setState({
            pending: true,
            txId
          })
          clearInterval(interval)
        }
      }, 1000)
    }

    return <div>
      Started auction for {query.domain} with the txId <a href={`https://ropsten.etherscan.io/tx/${this.state.txId}`}>{this.state.txId}</a>
      {this.state.pending ? <div>Transaction has been mined and auction has been started!</div> : <div>Waiting for Transaction to be mined<Loader /></div>}
    </div>
  }
}

export default Bid
