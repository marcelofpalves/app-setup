import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

export default new ApolloClient({
  link: new HttpLink({ uri: process.env.API_URL }),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__)
})
