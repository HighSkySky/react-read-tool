import React from 'react'

import './iconfont'
import './index.css'


function Icon(props) {
  return (
    <svg className="icon" aria-hidden="true">
      <use xlinkHref={`#icon-${props.src}`} />
    </svg>
  )
}

export default Icon