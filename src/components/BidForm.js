import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BidForm extends Component {
  constructor(){
    super()
    this.state = {
        price: 0,
        secret: ''
    }
  }
  render(){
      const { name } = this.props;
      return (
        <form>
            <input className="form-control" type="number" placeholder="price" value={this.state.price} onChange={e => { this.setState({price: e.target.value})}} /><br />
            <input className="form-control" type="password" value={this.state.secret} onChange={e => { this.setState({secret: e.target.value})}} /><br />
            <Link className="btn btn-primary" to={`/bid/?domain=${name}&secret=${this.state.secret}&bidAmount=${this.state.price}`}>Bid</Link>
        </form>);
  }
}

export default BidForm
