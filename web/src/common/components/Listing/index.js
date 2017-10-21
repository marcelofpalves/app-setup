import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Listing extends Component {
  render() {
    return (
      <div>
        <h1>Listing!</h1>
        <Link to="/product/1">product 1</Link>
        <Link to="/product/2">product 2</Link>
        <Link to="/product/3">product 3</Link>
      </div>
    )
  }
}
