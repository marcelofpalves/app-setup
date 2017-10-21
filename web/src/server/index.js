import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter as Router } from 'react-router'
import Routes from '../common/routing'
import express from 'express'

const app = express()
app.get('*', (req, res) => {
  const context = {}
  const location = req.url
  const html = ReactDOMServer.renderToString(
    <Router location={location} context={context}>
      <Routes />
    </Router>
  )

  res.send(html)
})
app.listen(3002)
