import React from 'react'
import {
  Link,
} from 'react-router-dom'

export function Header () {
  return (
    <header className="m-2 position-relative">
      <h1>
        React SSR Template
      </h1>
      <div className="d-flex justify-content-center">
        <Link to="/">
          Home
        </Link>
        <Link to="/page-2">
          Page 2
        </Link>
      </div>
    </header>
  )
}
