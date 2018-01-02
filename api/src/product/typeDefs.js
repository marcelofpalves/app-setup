export default `
  enum Currency {
    USD
    JPY
    EUR
  }

  type Money {
    amount: Float!
    currency: Currency!
  }

  type Product {
    id: ID!
    name: String!
    description: String
    price: Money!
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
