import React from 'react'
import PropTypes from 'prop-types'

import './iconfont'
import './index.css'

function Icon(props) {
  return (
    <svg className="icon" aria-hidden="true">
      <use xlinkHref={`#icon-${props.src}`} />
    </svg>
  )
}

Icon.propTypes = {
  src: PropTypes.string.isRequired
}

export default Icon