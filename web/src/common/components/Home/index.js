import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'
import { signInWithGoogle } from '../../../browser/authentication'

export default class Home extends Component {
  async handleSignIn(e) {
    e.preventDefault()

    try {
      const { user, token } = await signInWithGoogle()
      console.log(user, token)
    } catch (err) {
      console.log(err)
    }
  }

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
        <button onClick={this.handleSignIn.bind(this)}>sign in</button>
      </div>
    )
  }
}
