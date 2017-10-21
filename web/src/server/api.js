import fetch from 'node-fetch'
import ApolloClient from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

export default new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:4001/graphql', fetch }),
  cache: new InMemoryCache(),
  ssrMode: true
})
