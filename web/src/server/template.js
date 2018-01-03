import React, { Component } from 'react'

export default class Template extends Component {
  static defaultProps = {
    root: '',
    title: null,
    link: null,
    meta: null,
    lang: 'en'
  }

  render() {
    const { root, title, meta, link, lang, state } = this.props

    return (
      <html lang={lang}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#222222" />
          {meta}
          {title}
          <link rel="manifest" href="manifest.json" />
          <link rel="apple-touch-icon" href="icon.png" />
          <style>
            {`
              * {
                box-sizing: border-box;
                position: relative;
              }
              
              body {
                font: 14/1.64 sans-serif;
                color: #121212;
              }
            `}
          </style>
        </head>
        <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: root }} />

          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.__APOLLO_STATE__ = ${JSON.stringify(state)}
          `
            }}
          />
          <script src="http://localhost:8080/bundle.js" />
        </body>
      </html>
    )
  }
}
