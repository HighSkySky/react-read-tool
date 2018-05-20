import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import './index.css'

function Message(props) {
  const node = (
    <div className="message">
      {props.content}
    </div>
  )

  return ReactDOM.createPortal(
    node,
    document.body
  )
}

Message.propTypes = {
  value: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'warning']),
  content: PropTypes.string.isRequired
}

export default Message