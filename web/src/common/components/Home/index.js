import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Helmet
          title="A ball"
          meta={[
            {
              name: 'description',
              content: 'A great website'
            }
          ]}
        />
        <h1>Home!</h1>
        <Link to="/products">products</Link>
      </div>
    )
  }
}
