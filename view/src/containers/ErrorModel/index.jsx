import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Model from '../../components/Model'
import Icon from '../../components/Icon'

import './index.css'

function ErrorModel(props) {
  return (
    props.value
    ? <Model>
        <div className="model-error">
          <Icon src="tishi" />
          <span>出现了一些问题</span>
          <span>请重新再试试!</span>
        </div>
      </Model>
    : null
  )
}

ErrorModel.propTypes = {
  value: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
  value: state.status.status === 'error'
})

export default connect(mapStateToProps, null)(ErrorModel)