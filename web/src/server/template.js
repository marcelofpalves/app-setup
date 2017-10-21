import React, { Component } from 'react'

export default class Template extends Component {
  static defaultProps = {
    html: '',
    lang: 'en'
  }

  render() {
    const { html, lang } = this.props

    return (
      <html lang={lang}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="manifest" href="site.webmanifest" />
          <link rel="apple-touch-icon" href="icon.png" />
        </head>
        <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: html }} />
        </body>
      </html>
    )
  }
}
