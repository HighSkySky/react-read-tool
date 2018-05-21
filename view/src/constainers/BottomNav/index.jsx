import React from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'

import DefaultNav from './components/DefaultNav'
import HomeNav from './containers/HomeNav'
import BookNav from './containers/BookNav'
import ReadNav from './containers/ReadNav'

import './index.css'

function BottomNav(props) {
  return (
    <footer id="bottom-nav">
      <Switch>
        <Route exact path="/" component={HomeNav} />
        <Route path="/book" component={BookNav} />
        <Route path="/read" component={ReadNav} />
        <Route path="/chapter" component={null} />
        <Route component={DefaultNav} />
      </Switch>
    </footer>
  )
}

export default withRouter(BottomNav)