import React from 'react'
import PropTypes from 'prop-types'

function TopNavDefault(props) {
  return (
    <span className="title">{props.title}</span>
  )
}

TopNavDefault.propTypes = {
  title: PropTypes.string.isRequired
}

export default TopNavDefault