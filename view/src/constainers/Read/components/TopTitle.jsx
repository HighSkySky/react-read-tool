import React from 'react'
import PropTypes from 'prop-types'

function TopTitle(props) {
  return (
    <div className="top-title">
      <span>{props.bookTitle}</span>
      <span>{props.chapterTitle}</span>
    </div>
  )
}

TopTitle.propTypes = {
  bookTitle: PropTypes.string.isRequired,
  chapterTitle: PropTypes.string.isRequired
}

export default TopTitle