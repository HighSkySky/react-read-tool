import React from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'

import Default from './components/Default'
import Home from './containers/Home'
import Book from './containers/Book'

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
        <Route exact path="/" component={Home} />
        <Route path="/book" component={Book} />
        <Route component={Default} />
      </Switch>
    </footer>
  )
}

export default withRouter(BottomNav)