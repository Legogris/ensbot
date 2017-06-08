import React from 'react'
import { parse } from 'qs'

const RevealBid = ({ location, match }) => {
  const query = parse(location.search.substr(1))
  return <div>
    Revealed bid for {query.domain} for {query.bidAmount} ether using the secret {query.secret}
  </div>
}

export default RevealBid
