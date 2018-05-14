import React from 'react'
import PropTypes from 'prop-types'

import BookImg from '../../../components/BookImg'

function Info(props) {
  return (
    <div className="book-info">
      <BookImg id={props.id} type={props.type} />
      <div className="book-cell">
        <div className="title">{props.title}</div>
        <div className="author">作者:&nbsp;{props.author}</div>
        <div className="style">类型:&nbsp;{props.style}</div>
        <div className="new">状态:&nbsp;连载中</div>
      </div>
    </div>
  )
}

Info.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
}

export default Info

