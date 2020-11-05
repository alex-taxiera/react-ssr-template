import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { loadableReady } from '@loadable/component'

import { App } from './app'

// import "global" styles here
import './styles/reset.scss'

loadableReady(() => hydrate(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>,
  document.getElementById('root'),
))
