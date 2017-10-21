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
    const { root, title, meta, link, lang } = this.props

    return (
      <html lang={lang}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {meta}
          {title}
          <link rel="manifest" href="manifest.json" />
          <link rel="apple-touch-icon" href="icon.png" />
          {link}
        </head>
        <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: root }} />
        </body>
      </html>
    )
  }
}
