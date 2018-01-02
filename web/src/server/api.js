import fetch from 'node-fetch'
import ApolloClient from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

export default new ApolloClient({
  link: createHttpLink({ uri: process.env.API_URL, fetch }),
  cache: new InMemoryCache(),
  ssrMode: true
})
