import React from 'react'
import PropTypes from 'prop-types'

function DefaultNav(props) {
  return (
    <span className="title">{props.title}</span>
  )
}

DefaultNav.propTypes = {
  title: PropTypes.string.isRequired
}

export default DefaultNav