import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class Listing extends Component {
  render() {
    const { data: { loading, error, productSearch } } = this.props

    if (loading) {
      return <div>loading</div>
    }

    if (error) {
      return <div>error</div>
    }

    const { edges } = productSearch

    return (
      <div>
        <h1>Listing!</h1>

        <ol>
          {edges.map(({ node }) => {
            return (
              <li key={node.id}>
                <Link to={`/product/${node.id}`}>{node.name}</Link>
              </li>
            )
          })}
        </ol>
      </div>
    )
  }
}

const ProductSearchQuery = gql`
  query ProductSearch {
    productSearch {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`

export default graphql(ProductSearchQuery)(Listing)
