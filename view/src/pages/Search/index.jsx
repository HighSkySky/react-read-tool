import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import addNav from '../../containers/addNav'
import Form from './containers/Form'
import History from './containers/History'
import Result from './containers/Result'

import { initSearchState, changeSearchInput, saveSearchScrollHeight } from '../../store/reducers/search'

import { parse } from '../../util/url'

import './index.css'

const mapStateToProps = (state) => ({
  searchInput: state.search.input,
  resultKey: state.search.result.key,
  scrollHeight: state.search.ui.scroll
})

const mapDispatchToProps = dispatch => ({
  initState: () => dispatch(initSearchState()),
  changeInput: (value) => dispatch(changeSearchInput(value)),
  saveScrollHeight: (value) => dispatch(saveSearchScrollHeight(value))
})

@addNav('搜索')
@connect(mapStateToProps, mapDispatchToProps)
class Search extends React.Component {
  static propTypes = {
    searchInput: PropTypes.string.isRequired,
    resultKey: PropTypes.string.isRequired,
    scrollHeight: PropTypes.number.isRequired,
    initState: PropTypes.func.isRequired,
    changeInput: PropTypes.func.isRequired,
    saveScrollHeight: PropTypes.func.isRequired
  }

  componentDidMount() {
    const searchString = this.props.location.search
    const query = parse(searchString)
    const key = query.key
    const resultKey = this.props.resultKey
    if (key) {
      this.props.changeInput(decodeURIComponent(key))
    } else {
      resultKey && this.props.history.replace(`/search?key=${resultKey}`)
    }  
    this.props.initState()
    window.scrollTo(0, this.props.scrollHeight)
  }

  componentWillUnmount() {
    const height = window.scrollY
    this.props.saveScrollHeight(height)
  }

  render() {
    return (
      <div id="search">
        <Form />
        {
          this.props.searchInput.trim() === '' ||
          this.props.searchInput !== this.props.resultKey
          ? <History />
          : <Result />
        }
      </div>
    )
  }
}

export default Search