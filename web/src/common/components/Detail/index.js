import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    const { match: { params: { id } } } = this.props
    return (
      <div>
        <h1>Detail {id}</h1>
      </div>
    )
  }
}
