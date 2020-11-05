import React from 'react'
import { AnchorToTab } from '../../server/components/anchor-to-tab'

export function Footer () {
  return (
    <footer className="d-flex justify-content-center m-2">
      <AnchorToTab href="https://github.com/alex-taxiera">
        Alex Taxiera
      </AnchorToTab>
      &nbsp;
      <AnchorToTab href="https://github.com/alex-taxiera/react-ssr-template">
        {'<Code />'}
      </AnchorToTab>
    </footer>
  )
}
