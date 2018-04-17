import React from 'react'

import './index.css'

function TopNav(props) {
  return (
    <header id="top-nav">
      <span className="title">{props.title}</span>
    </header>
  )
}

export default TopNav