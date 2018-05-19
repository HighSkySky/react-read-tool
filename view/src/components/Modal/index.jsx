import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import './index.css'

class Modal extends React.Component{
  static propTypes = {
    value: PropTypes.bool.isRequired,
    children: PropTypes.string.isRequired,
    okText: PropTypes.string,
    cancelText: PropTypes.string,
    onClose: PropTypes.func
  }

  state = { value: false }

  static getDerivedStateFromProps(nextProps, prevState) {
    return { ...prevState, value: nextProps.value }
  }

  handleCloseClick = state => {
    this.props.onClose && this.props.onClose(state)
    this.setState({ value: false })
  }

  render() {
    if (this.state.value === false ) return null

    const node = (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-body">{this.props.children}</div>
          <div className="modal-footer">
            <a className="not-allow" onClick={() => this.handleCloseClick(false)}>
              {this.props.cancelText ? this.props.cancelText : '取消'}
            </a>
            <a className="allow" onClick={() => this.handleCloseClick(true)}>
              {this.props.okText ? this.props.okText : '确认'}
            </a>
          </div>
        </div>
      </div>
    )

    return ReactDOM.createPortal(
      node,
      document.body
    )
  }
}

export default Modal