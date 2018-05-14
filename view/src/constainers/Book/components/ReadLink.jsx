import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Icon from '../../../components/Icon'

function ReadLink(props) {
  return (
    <div className="read-link">
      <div className="time">
        <span>最新&nbsp;{props.chapter}</span>
      </div>
      <Link className="chapter"
        to={`/chapter?id=${props.id}&type=${props.type}`}>
        <Icon src="leimu" />
        <span>目录</span>
      </Link>
    </div>
  )
}

ReadLink.propTypes = {
  time: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired
}

export default ReadLink