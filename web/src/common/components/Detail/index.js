import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'
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
      <article itemScope itemType="http://schema.org/Product">
        <Helmet
          title="A ball"
          meta={[
            {
              name: 'description',
              content: 'A great title'
            }
          ]}
        />
        <h1 itemProp="name">{product.name}</h1>
        <Link to="/checkout">buy now</Link>
      </article>
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
