import React from 'react'
import {
  Helmet,
} from 'react-helmet-async'

import { Header } from './header'
import { Footer } from './footer'
import { Routes } from './routes'

export function App ({ data }) {
  return (
    <>
      <MainSEO manifest={data.manifest} />
      <Header />
      <main className="text-center flex-grow-1">
        <Routes />
      </main>
      <Footer />
    </>
  )
}

function MainSEO ({ manifest }) {
  return (
    <Helmet
      titleTemplate={`${manifest.short_name} | %s`}
      defaultTitle={manifest.short_name}
      htmlAttributes={{
        lang: 'en-US',
      }}
      link={[
        {
          rel: 'manifest',
          href: '/manifest.webmanifest',
        },
      ]}
      meta={[
        {
          property: 'og:site_name',
          content: manifest.name,
        },
        {
          property: 'og:title',
          content: manifest.short_name,
        },
        {
          name: 'description',
          content: manifest.description,
        },
        {
          charset: 'utf-8',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: 'Alex Taxiera',
        },
        {
          name: 'twitter:title',
          content: manifest.short_name,
        },
        {
          name: 'twitter:description',
          content: manifest.description,
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        },
        {
          name: 'theme-color',
          content: manifest.theme_color,
        },
        {
          name: 'description',
          content: manifest.description,
        },
        {
          name: 'keywords',
          content: manifest.keywords?.join(', '),
        },
      ]}
    />
  )
}
