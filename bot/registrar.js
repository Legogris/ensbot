// import { deedContract } from './services/ens'
// import { getOwner } from './registry'

export function checkName(Registrar, Registry, name){
  let avail = Registrar.entries(web3.sha3('name'))

  switch(avail){
    case 0:
      return "available"
    case 1:
      return 'up for auction'
    case 5:
      return "not yet available for auction"
    default:
      let owner = Registry.getOwner(Registry, name)
      return 'name is already taken by ' + owner
  }
}

export function startAuction(Registrar, name) {
  return Registrar.startAuction(web3.sha3(name), {from: web3.eth.accounts[0], gas: 100000});
}

export function startAuctionAndBid(Registrar, name, amount, maximumAmount, secret) {
  let namehash = web3.sha3(name)
  let bid = generateBid(Registrar, name, amount, secret)
  return Registrar.startAuctionsAndBid([namehash], bid)
}

export function generateBid(Registrar, name, amount, secret){
  let bid = Registrar.shaBid(web3.sha3(name), web3.eth.accounts[0], web3.toWei(amount, 'ether'), web3.sha3(secret));
  return bid
}

export function bidOnAuction(Registrar, name, amount, maximumAmount, secret){
  let bid = generateBid(Registar, name, amount, secret)

  return Registrar.newBid(bid, {from: web3.eth.accounts[0], value: web3.toWei(maximumAmount, 'ether'), gas: 500000});
}

export function revealBid(Registrar, name, bidAmount, secret){
  return Registrar.unsealBid(web3.sha3(name), web3.toWei(bidAmount, 'ether'), web3.sha3(secret), {from: web3.eth.accounts[0], gas: 500000});
}

/*
export const checkCurrentWinner = (Registrar, name) =>
  deedContract.at(Registrar.entries(web3.sha3(name))[1]).owner()
  */

export const checkCurrentWinningBid = (Registrar, name) =>
  web3.fromWei(Registrar.entries(web3.sha3(name))[4], 'ether');

export function checkCurrentWinnerAndBid(Registrar, name){
  let winner = checkCurrentWinner(Registrar, name)
  let amount = checkCurrentWinningBid(Registrarm, name)
  return {
    winner,
    amount
  }
}
