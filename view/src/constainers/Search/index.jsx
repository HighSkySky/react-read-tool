import React from 'react'
import { connect } from 'react-redux'

import Form from './components/Form'
import Result from './components/Result'

import './index.css'

import { changeSearchInput, fetchSearchStart, loadMoreSearchResult, saveSearchScrollHeight } from '../../reducers/search'

const mapStateToProps = state => ({
  input: state.search.input,
  resultKey: state.search.result.key,
  result: state.search.result.data,
  current: state.search.current,
  pageSize: state.search.pageSize,
  scrollHeight: state.search.scroll
})

const mapDispatchToProps = dispatch => ({
  changeInput: value => dispatch(changeSearchInput(value)),
  fetchSearch: key => dispatch(fetchSearchStart(key)),
  loadPage: () => dispatch(loadMoreSearchResult()),
  saveScrollHeight: height => dispatch(saveSearchScrollHeight(height))
})

@connect(mapStateToProps, mapDispatchToProps)
class Search extends React.Component {
  componentDidMount() {
    window.scrollTo(0, this.props.scrollHeight)
  }

  componentWillUnmount() {
    const height = window.scrollY
    console.log(height)
    this.props.saveScrollHeight(height)
  }

  render() {
    return (
      <div id="search">
        <Form onChange={this.props.changeInput}
          onSubmit={this.props.fetchSearch}
          value={this.props.input} />
        { 
          this.props.resultKey === this.props.input 
          && this.props.input !== ''
          ? <Result data={this.props.result} 
            current={this.props.current}
            pageSize={this.props.pageSize}
            loadPage={this.props.loadPage}
            /> 
          : null
        }
      </div>
    )
  }
}

export default Search