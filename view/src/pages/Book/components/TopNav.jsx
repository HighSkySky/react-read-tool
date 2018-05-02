import React from 'react'
import { withRouter } from 'react-router-dom'

import BackLink from '../../../containers/BackLink'

function TopNav(props) {
  return (
    <header id="top-nav">
      <div id="book-header">
        <BackLink />
      </div>
    </header>
  )
}

export default withRouter(TopNav)