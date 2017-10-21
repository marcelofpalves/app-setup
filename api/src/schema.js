import { makeExecutableSchema } from 'graphql-tools'
import productTypeDefs from './product/typeDefs'
import productResolvers from './product/resolvers'

const typeDefs = `
  ${productTypeDefs}    
  
  type Query {
    product(id: ID!): Product
  }  
`

const resolvers = {
  ...productResolvers
}

export default makeExecutableSchema({
  typeDefs,
  resolvers
})
