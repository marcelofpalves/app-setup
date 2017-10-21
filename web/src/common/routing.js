import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Listing from './components/Listing'
import Detail from './components/Detail'
import NotFound from './components/NotFound'

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/products" component={Listing} />
        <Route path="/product/:id" component={Detail} />
        <Route path="*" component={NotFound} />
      </Switch>
    )
  }
}
