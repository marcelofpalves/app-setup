import express from 'express'
import spdy from 'spdy'
import compression from 'compression'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter as Router } from 'react-router'
import { ApolloProvider } from 'react-apollo'
import Helmet from 'react-helmet'
import Routes from '../common/routing'
import client from './api'
import Template from './template'
import config from './config'

const app = express()
app.use(compression())
app.use(express.static(config.publicPath))

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
  // always call Helmet.renderStatic after ReactDOMServer.renderToString
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

const PORT = 3002

spdy.createServer(config.certificate, app).listen(PORT, err => {
  if (err) {
    console.error(err)
    return process.exit(1)
  } else {
    console.log('Listening on port', PORT)
  }
})
