import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import BookImg from '../../../components/BookImg'

function ResultItem(props) {
  return (
    <Link to={{ pathname: '/book', search: `?type=${props.type}&id=${props.id}` }}>
      <div className="left">
        <BookImg id={props.id} type={props.type} />
      </div>
        <div className="right">
        <div className="title">{props.title}</div>
        <div className="author">{props.author}</div>
        <div className="info">最新章节：{props.lastestChapter}</div>
        <div className="info">更新时间：{props.updateTime}</div>
      </div>
    </Link>
  )
}

ResultItem.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  lastestChapter: PropTypes.string.isRequired,
  updateTime: PropTypes.string.isRequired
}

export default ResultItem