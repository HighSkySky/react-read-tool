import * as React from 'react'

import addNav from '../../containers/addNav'

@addNav('书架')
class Home extends React.Component {
  render() {
    return (
      <div id="home">
        home
      </div>
    )
  }
}

export default Home