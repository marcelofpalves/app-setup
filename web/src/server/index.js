import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter as Router } from 'react-router'
import { ApolloProvider } from 'react-apollo'
import Helmet from 'react-helmet'
import Routes from '../common/routing'
import express from 'express'
import spdy from 'spdy'
import compression from 'compression'
import client from './api'
import Template from './template'

const publicPath = path.resolve(__dirname, '..', '..', 'resources', 'public')
const certificatePath = path.resolve(
  __dirname,
  '..',
  '..',
  'resources',
  'certificates'
)

// chrome://flags/#allow-insecure-localhost
const options = {
  key: fs.readFileSync(path.join(certificatePath, 'server.key')),
  cert: fs.readFileSync(path.join(certificatePath, 'server.crt'))
}

console.log(options)

const app = express()
app.use(compression())
app.use(express.static(publicPath))

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

const PORT = 3002

spdy.createServer(options, app).listen(PORT, err => {
  if (err) {
    console.error(err)
    return process.exit(1)
  } else {
    console.log('Listening on port', PORT)
  }
})
