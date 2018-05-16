import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'

import Loading from './constainers/Loading'
import TopNav from './constainers/TopNav'
import BottomNav from './constainers/BottomNav'
import Main from './constainers/Main'

import './global.css'

import { initUserState } from './reducers/user'

const mapDispatchToProps = dispatch => ({
  initState: () => dispatch(initUserState())
})

@hot(module)
@connect(null, mapDispatchToProps)
class App extends React.Component {
  componentDidMount() {
    this.props.initState()
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Loading />
          <Main />
          <TopNav />
          <BottomNav />
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default App