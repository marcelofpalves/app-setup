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

    if (window.PaymentRequest) {
      try {
        const result = await pay({ value: 65, currency: 'USD' })
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
    return (
      <div>
        <p>some product</p>
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
