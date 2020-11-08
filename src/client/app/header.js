import React from 'react'
import {
  Link,
} from 'react-router-dom'

export function Header () {
  return (
    <header className="m-2 text-center position-relative">
      <h1>
        React SSR Template
      </h1>
      <div className="d-flex justify-content-center">
        <Link to="/" className="px-1 mx-1">
          Home
        </Link>
        <Link to="/page-2" className="px-1 mx-1">
          Page 2
        </Link>
      </div>
    </header>
  )
}
