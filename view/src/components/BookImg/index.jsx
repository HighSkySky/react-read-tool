import React from 'react'
import PropTypes from 'prop-types'

import nocover from './nocover.jpg'

function onError(event) {
  event.target.src = nocover
}

function BookImg(props) {
  return <img src={`/image?id=${props.id}&type=${props.type}`} 
    alt="图片加载失败"
    onError={onError}/>
}

BookImg.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default BookImg