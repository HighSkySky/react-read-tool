import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import './index.css'

import { Home, Search, Setting, Book } from '../pages'
import Loading from '../containers/Loading'
import ErrorModel from '../containers/ErrorModel'

@hot(module)
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <React.Fragment>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/book" component={Book} />
            <Route path="/set" component={Setting} />
          </React.Fragment>
        </BrowserRouter>
        <Loading />
        <ErrorModel />
      </React.Fragment>
    )
  }
}

export default App
