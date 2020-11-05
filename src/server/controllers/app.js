import { join } from 'path'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ChunkExtractor } from '@loadable/server'
import queryString from 'query-string'

import helica from 'helica'
import { routeLoader } from '../utils/route-loader.js'
import { App as WebApp } from '../../client/app'

class App {

  get (res, req) {
    const extractor = new ChunkExtractor({
      statsFile: join(__dirname, '../../../dist/loadable-stats.json'),
      entrypoints: [ 'main' ],
    })
    const helmetContext = {}

    const jsx = (
      <HelmetProvider context={helmetContext}>
        <StaticRouter
          context={{}}
          location={{
            pathname: req.url,
            search: queryString.stringify(req.query),
          }}
        >
          <WebApp />
        </StaticRouter>
      </HelmetProvider>
    )

    const html = renderToString(extractor.collectChunks(jsx))
    const { helmet } = helmetContext

    return helica.send(
      res,
      `
        <!DOCTYPE html>
        <html ${helmet.htmlAttributes.toString()}>
          <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
            ${extractor.getLinkTags()}
            ${extractor.getStyleTags()}
          </head>
          <body ${helmet.bodyAttributes.toString()}>
            <div id="root">${html}</div>
            ${extractor.getScriptTags()}
          </body>
        </html>
      `,
    )
  }

}

export const loadRoute = routeLoader((app, basePath) => {
  app.addResource(`${basePath}`, App)
})
