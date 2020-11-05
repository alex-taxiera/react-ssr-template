import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'
import loadable from '@loadable/component'

// Pages must use default export for loadable
const Home = loadable(() => import('../pages/home'))
const Page2 = loadable(() => import('../pages/page-2'))
const NotFound = loadable(() => import('../pages/not-found'))

export function Routes () {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/page-2">
        <Page2 />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  )
}
