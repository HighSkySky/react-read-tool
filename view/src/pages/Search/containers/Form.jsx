import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { changeSearchInput, fetchSearchResultStart } from '../../../store/reducers/search'

const mapStateToProps = (state) => ({
  value: state.search.input
})

const mapDispatchToProps = dispatch => ({
  onChange: (value) => dispatch(changeSearchInput(value)),
  onSubmit: (value) => dispatch(fetchSearchResultStart(value))
})

@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Form extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const value = this.props.value.trim()
    if (value) {
      this.props.history.push(`/search?key=${this.props.value}`)
      this.props.onSubmit(this.props.value)
    }
  }

  handleChange = (event) => {
    const value = event.target.value
    this.props.onChange(value)
  }
  
  render() {
    return (
      <form className="form" 
        onSubmit={this.handleSubmit}>
        <input placeholder="输入关键词" type="text"
          onChange={this.handleChange}
          value={this.props.value} />
        <button type="submit">搜索</button>
      </form>
    )
  }
}

export default Form