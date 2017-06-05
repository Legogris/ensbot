class AuctionTracker {
  constructor(bidTime, revealTime) {
    this.auction = {}
    this.bidTime = bidTime
    this.revealTime = revealTime
  }
  recordAuction(name, bid, start){
    let bidTime = this.bidTime
    let revealTime = this.revealTime
    this.auction[name] = {
      revealStart: start + bidTime,
      revealEnd: start + bidTime + revealTime
    }
    return this.auction[name]
  }
  checkAuctionIsOver(name, bid, currentTime){
    if (currentTime > this.auction[name].revealEnd) {
      return 'auction is over'
    } else if(currentTime > this.auction[name].revealStart){
      return 'bidding is finished, currently in reveal period'
    } else {
      return 'bidding is still on'
    }
  }
}

export default AuctionTracker
