import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter as Router } from 'react-router'
import { ApolloProvider } from 'react-apollo'
import Helmet from 'react-helmet'
import Routes from '../common/routing'
import express from 'express'
import client from './api'
import Template from './template'

const app = express()
app.get('*', (req, res) => {
  const context = {}
  const location = req.url
  const root = ReactDOMServer.renderToString(
    <ApolloProvider client={client}>
      <Router location={location} context={context}>
        <Routes />
      </Router>
    </ApolloProvider>
  )
  const helmet = Helmet.renderStatic()

  const html =
    '<!doctype html>\n' +
    ReactDOMServer.renderToStaticMarkup(
      <Template
        title={helmet.title.toComponent()}
        meta={helmet.meta.toComponent()}
        root={root}
      />
    )

  res.send(html)
})
app.listen(3002)
