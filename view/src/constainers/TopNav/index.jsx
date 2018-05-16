import React from 'react'
import { Route } from 'react-router-dom'

import Default from './components/Default'
import Home from './containers/Home'
import Book from './containers/Book'
import Read from './containers/Read'

import './index.css'

function TopNav() {
  return (
    <header id="top-nav">
      <Route exact path="/" component={Home} />
      <Route path="/search" render={() => <Default title="搜索" />} />
      <Route path="/set" render={() => <Default title="设置" />} />
      <Route path="/book" component={Book} />
      <Route path="/read" component={Read} />
    </header>
  )
}

export default TopNav