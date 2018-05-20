import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'

import Loading from './constainers/Loading'
// import Message from './constainers/Message'
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
          {/* <Message content='更新完成'/> */}
          <TopNav />
          <BottomNav />
          <Main />
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default App