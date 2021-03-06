import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Book from './Book'
import Search from './Search'
import Read from './Read'
import Chapter from './Chapter'

function Main() {
  return (
    <div id="main">
      <Route exact path="/" component={Home} />
      <Route path="/book" component={Book} />
      <Route path="/search" component={Search} />
      <Route path="/read" component={Read} />
      <Route path="/chapter" component={Chapter} />
    </div>
  )
}

export default Main