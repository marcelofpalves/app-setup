import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

async function pay(amount) {
  const supportedPaymentMethods = [
    {
      supportedMethods: 'basic-card'
    }
  ]

  const options = {}

  const paymentDetails = {
    total: {
      label: 'Total',
      amount
    }
  }

  const paymentResponse = await new window.PaymentRequest(
    supportedPaymentMethods,
    paymentDetails,
    options
  ).show()

  return paymentResponse.complete()
}

class Checkout extends Component {
  async handlePayment(e) {
    e.preventDefault()

    const { data: { product: { price } } } = this.props
    const { amount, currency } = price

    if (window.PaymentRequest) {
      try {
        const result = await pay({ value: amount, currency })
        console.log(result)
      } catch (err) {
        console.log(err)
      }
    } else {
      console.log('@todo')
      console.log('Redirecting to old checkout')
    }
  }

  render() {
    const { loading, error, product } = this.props.data

    if (loading) {
      return <div>loading</div>
    }

    if (error) {
      return <div>error</div>
    }

    const { name, price } = product

    return (
      <div>
        <h1>Checkout</h1>
        <p>{name}</p>
        <p>
          {price.amount} {price.currency}
        </p>
        <div>
          <button onClick={this.handlePayment.bind(this)}>pay</button>
        </div>
      </div>
    )
  }
}

const CheckoutProductQuery = gql`
  query CheckoutProductQuery($id: ID!) {
    product(id: $id) {
      id
      name
      price {
        amount
        currency
      }
    }
  }
`

export default graphql(CheckoutProductQuery, {
  options(ownProps) {
    const { match: { params: { productId } } } = ownProps
    return {
      variables: {
        id: productId
      }
    }
  }
})(Checkout)
