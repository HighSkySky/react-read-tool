import React from 'react'
import PropTypes from 'prop-types'

class Intro extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: true
    }
  }

  handleToggle = (event) => {
    this.setState({ value: !this.state.value })
  }

  render() {
    return (
      <div className="intro">
        <div className="main"
          style={{height: this.state.value ? '12vmin' : 'auto'}}>
          {this.props.children}
        </div>
        <a onClick={this.handleToggle}>
          {this.state.value ? '展开▼' : '收起▲'}
        </a>
      </div>
    )
  }
}

Intro.propTypes = {
  children: PropTypes.string
}

export default Intro