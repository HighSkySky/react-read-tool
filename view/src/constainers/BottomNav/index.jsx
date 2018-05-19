import React from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'

import DefaultNav from './components/DefaultNav'
import HomeNav from './containers/HomeNav'
import BookNav from './containers/BookNav'
import ReadNav from './containers/ReadNav'

import './index.css'

function BottomNav(props) {
  // const pathName = props.location.pathname
  // const blackList = ['/book']

  // if (blackList.some(item => item === pathName)) {
  //   return null
  // }

  return (
    <footer id="bottom-nav">
      <Switch>
        <Route exact path="/" component={HomeNav} />
        <Route path="/book" component={BookNav} />
        <Route path="/read" component={ReadNav} />
        <Route component={DefaultNav} />
      </Switch>
    </footer>
  )
}

export default withRouter(BottomNav)