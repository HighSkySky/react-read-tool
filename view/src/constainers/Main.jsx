import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Book from './Book'

function Main() {
  return (
    <div id="main">
      <Route exact path="/" component={Home} />
      <Route path="/book" component={Book} />
    </div>
  )
}

export default Main