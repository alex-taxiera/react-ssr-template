import React from 'react'

import { Header } from './header'
import { Footer } from './footer'
import { Routes } from './routes'

export function App () {
  return (
    <>
      <Header />
      <main>
        <Routes />
      </main>
      <Footer />
    </>
  )
}
