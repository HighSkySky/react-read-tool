import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import './index.css'

import { Home, Search, Setting } from '../pages'

@hot(module)
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/set" component={Setting} />
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default App
