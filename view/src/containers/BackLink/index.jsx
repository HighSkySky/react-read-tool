import React from 'react'
import { withRouter } from 'react-router-dom'

import Icon from '../../components/Icon'

import './index.css'

function BackLink(props) {
  return (
    <a className="back-link"
      onClick={props.history.goBack}>
      <Icon src="xiangzuo1" />
      <span>返回</span>
    </a>
  )
}

export default withRouter(BackLink)