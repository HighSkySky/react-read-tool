import React from 'react'

import Icon from '../../../components/Icon'

function Book(props) {
  return(
    <div className="book">
      <a onClick={props.history.goBack}>
        <Icon src="xiangzuo1" />
      </a>
      <div className="title">书籍详情</div>
      <a onClick={() => props.history.push('/')}>
        <Icon src="caidan" />
      </a>
    </div>
  )
}

export default Book