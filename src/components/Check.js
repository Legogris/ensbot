import React from 'react'
import { parse } from 'qs'

const Check = ({ location, match, web3 }) => {
  const query = parse(location.search.substr(1))
  //const availability = ethRegistrar.entries(web3.sha3(query.domain))[0]
  console.log(query)
  return <div>
    check domain {query.domain}

  </div>
}

export default Check
