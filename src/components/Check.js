import React, { Component } from 'react'
import { parse } from 'qs'
import web3 from '../web3'
import { ethRegistrar } from '../ensutils'

const Check = ({ location, match }) => {
  const query = parse(location.search.substr(1))
  const name = query.domain
  const availability = ethRegistrar.entries(web3.sha3(query.domain))[0].toString()
  let content = null
  switch (availability) {
    case 0:
      content = <div>Domain is available!</div>
    case 5:
      content = <div>Domain is not available to bid yet!</div>
    default:
      content = <div>Domain is taken!</div>
  }
  return <div>
    <div>{content}</div>
  </div>
}

export default Check
