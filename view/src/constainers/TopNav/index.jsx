import React from 'react'
import { Route } from 'react-router-dom'

import DefaultNav from './components/DefaultNav'
import HomeNav from './containers/HomeNav'
import BookNav from './containers/BookNav'
import ReadNav from './containers/ReadNav'
import ChapterNav from './containers/ChapterNav'

import './index.css'

function TopNav() {
  return (
    <header id="top-nav">
      <Route exact path="/" component={HomeNav} />
      <Route path="/search" render={() => <DefaultNav title="搜索" />} />
      <Route path="/more" render={() => <DefaultNav title="设置" />} />
      <Route path="/book" component={BookNav} />
      <Route path="/read" component={ReadNav} />
      <Route path="/chapter" component={ChapterNav} />
    </header>
  )
}

export default TopNav