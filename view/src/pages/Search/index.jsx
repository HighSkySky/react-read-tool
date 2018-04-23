import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import addNav from '../../containers/addNav'
import Form from './containers/Form'
import History from './containers/History'

import { initSearchState } from '../../store/reducers/search'

import './index.css'

const mapStateToProps = (state) => ({
  history: state.search.history
})

const mapDispatchToProps = dispatch => ({
  initState: () => dispatch(initSearchState())
})

@addNav('搜索')
@connect(mapStateToProps, mapDispatchToProps)
class Search extends React.Component {
  static propTypes = {
    history: PropTypes.arrayOf(PropTypes.string),
    initState: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.initState()
  }

  render() {
    return (
      <div id="search">
        <Form />
        <History />
      </div>
    )
  }
}

export default Search