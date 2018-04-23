import React from 'react'

import TopNav from '../../components/TopNav'
import BottomNav from '../../components/BottomNav'

import './index.css'

function addNav(title) {
  return function (Component) {
    return function (props) {
      return (
        <React.Fragment>
          <TopNav title={title} />
          <div id="main">
            <Component {...props} />
          </div>
          <BottomNav />
        </React.Fragment>
      )
    }
  }
}

export default addNav