import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

class Slider extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onInput: PropTypes.func
  }
  
  static defaultProps = {
    value: 0
  }

  constructor(props) {
    super(props)
    this.state = {
      value: props.value,
      startX: null
    }
    this.body = null
    this.button = null
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const value = nextProps.value
    return { ...prevState, value }
  }

  handleTouch = event => {
    event.preventDefault()
  }
 
  handleStartTouch = event => {
    const x = this.button.getBoundingClientRect().x
    this.setState({ startX: x })
  }

  handleTouchMove = event => {
    if (this.state.startX) {
      const width = this.body.clientWidth
      const barLeftWidth = this.body.offsetLeft
      const leftWidth = event.touches[0].clientX
      let value = ((leftWidth - barLeftWidth) / width * 100).toFixed(1)
      value = value > 100 ? 100 : value
      value = value < 0 ? 0 : value
      this.setState({ value })
      this.isMove = false
      this.props.onInput && this.props.onInput(value)
    }
  }

  handleEndTouch= event => {
    if (this.state.startX) {
      this.props.onChange && this.props.onChange(this.state.value)
      this.setState({ startX: null })
    }
    
  }

  render() {
    return (
      <div className="slider"
        ref={body => this.body = body}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleEndTouch}>
        <div className="slider-wrap">
          <div className="slider-bar"></div>
          <div className="slider-button-wrap"
            style={{left: this.state.value + '%'}}
            onTouchStart={this.handleStartTouch}>
            <div className="slider-button" 
              ref={button => this.button = button}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Slider