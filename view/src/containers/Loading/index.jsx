import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './index.css'

function Loading(props) {
  return (
    props.value
    ? <div id="loading">
        <div className="main">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    : null
  )
}

Loading.propTypes = {
  value: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
  value: state.status.status === 'loading'
})

export default connect(mapStateToProps)(Loading)