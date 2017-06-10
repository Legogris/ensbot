import React, { Component } from 'react'
import { parse } from 'qs'
import { ethRegistrar } from '../ensutils'
import web3 from '../web3'
import Loader from 'react-loader'

class StartAuction extends Component {
  constructor(){
    super()
    this.state = {
      started: false,
      pending: false,
      txId: ""
    }
  }
  render(){
    let { location } = this.props
    const query = parse(location.search.substr(1))
    let split = query.domain.split('.'),
        name;
        name = split[0]
    let txId = ""
    if(this.state.started === false){
      txId = ethRegistrar.startAuction(web3.sha3(name), {from: web3.eth.accounts[0], gas: 1000000});
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

export default StartAuction
