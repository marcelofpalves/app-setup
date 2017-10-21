import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter as Router } from 'react-router'
import { ApolloProvider } from 'react-apollo'
import Routes from '../common/routing'
import express from 'express'
import client from './api'
import Template from './template'

const app = express()
app.get('*', (req, res) => {
  const context = {}
  const location = req.url
  const html =
    '<!doctype html>\n' +
    ReactDOMServer.renderToStaticMarkup(
      <Template
        html={ReactDOMServer.renderToString(
          <ApolloProvider client={client}>
            <Router location={location} context={context}>
              <Routes />
            </Router>
          </ApolloProvider>
        )}
      />
    )

  res.send(html)
})
app.listen(3002)
