import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class Detail extends Component {
  render() {
    const { loading, error, product } = this.props.data

    if (loading) {
      return <div>loading</div>
    }

    if (error) {
      return <div>error</div>
    }

    return (
      <div>
        <h1>
          Detail {product.id} {product.name}
        </h1>
      </div>
    )
  }
}

const ProductQuery = gql`
  query ProductQuery($id: ID!) {
    product(id: $id) {
      id
      name
    }
  }
`

export default graphql(ProductQuery, {
  options(ownProps) {
    const { match: { params: { id } } } = ownProps
    return {
      variables: {
        id
      }
    }
  }
})(Detail)
