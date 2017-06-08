import React from 'react'
import { parse } from 'qs'

const StartAuction = ({ match, location }) => {
  const query = parse(location.search.substr(1))
  return <div>Started auction for {query.domain}</div>
}

export default StartAuction
