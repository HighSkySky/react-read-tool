import React from 'react'
import PropTypes from 'prop-types'

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