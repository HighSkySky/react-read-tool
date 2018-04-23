import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../../components/Icon'

function HistoryItem(props) {
  return (
    <a onClick={() => props.onClick(props.value)}>
      <Icon src="shizhong" />
      &nbsp;&nbsp;
      <span>{props.value}</span>
    </a>
  );
}

HistoryItem.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default HistoryItem