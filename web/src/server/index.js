import 'dotenv/config'
import express from 'express'
import spdy from 'spdy'
import compression from 'compression'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter as Router } from 'react-router'
import { ApolloProvider, getDataFromTree } from 'react-apollo'
import Helmet from 'react-helmet'
import Routes from '../common/routing'
import client from './api'
import Template from './template'
import config from './config'

const app = express()
app.use(compression())
app.use(express.static(config.publicPath))

app.get('*', async (req, res) => {
  const context = {}
  const location = req.url
  const app = (
    <ApolloProvider client={client}>
      <Router location={location} context={context}>
        <Routes />
      </Router>
    </ApolloProvider>
  )

  try {
    await getDataFromTree(app)
    const root = ReactDOMServer.renderToString(app)
    const initialState = client.extract()

    // always call Helmet.renderStatic after ReactDOMServer.renderToString
    const helmet = Helmet.renderStatic()

    const html =
      '<!doctype html>\n' +
      ReactDOMServer.renderToStaticMarkup(
        <Template
          title={helmet.title.toComponent()}
          meta={helmet.meta.toComponent()}
          root={root}
          state={initialState}
        />
      )

    return res.send(html)
  } catch (err) {
    return res.status(500)
  }
})

const PORT = 3002

app.listen(PORT, err => {
  if (err) {
    console.error(err)
    return process.exit(1)
  } else {
    console.log('Listening on port', PORT)
  }
})
