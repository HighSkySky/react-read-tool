import React from 'react'

import addNav from '../../containers/addNav'
import Form from './Form'

import './index.css'

@addNav('搜索')
class Search extends React.Component {
  render() {
    return (
      <div id="search">
        <Form />
      </div>
    )
  }
}

export default Search