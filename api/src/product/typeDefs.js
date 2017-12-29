export default `
  type Product {
    id: ID!
    name: String!
    description: String
  }

  type ProductsConnection {
    totalCount: Int
    edges: [ProductEdge]
    pageInfo: [PageInfo]
  }

  type ProductEdge {
    node: Product
    cursor: String
  }

  type PageInfo {
    endCursor: String
    hasNextPage: Boolean
  }
`
