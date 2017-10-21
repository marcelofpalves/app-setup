import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Listing extends Component {
  render() {
    return (
      <div>
        <h1>Listing!</h1>
        <Link to="/product/a0ba1440-a0c2-441f-b627-9054812f2bb4">
          product 1
        </Link>
        <Link to="/product/67d97c09-6d0a-45bb-8d18-50e46600d29c">
          product 2
        </Link>
        <Link to="/product/b6319ea7-8bfb-4f9c-a3e7-3c2bfc748113">
          product 3
        </Link>
      </div>
    )
  }
}
