import React from 'react'

class Form extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault()
  }
  
  render() {
    return (
      <form className="form" 
        onSubmit={this.handleSubmit}>
        <input placeholder="输入关键词" type="text"/>
        <button type="submit">搜索</button>
      </form>
    )
  }
}

export default Form