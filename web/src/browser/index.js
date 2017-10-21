import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import Routes from '../common/routing'

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4001/graphql' }),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__)
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Routes />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
)
