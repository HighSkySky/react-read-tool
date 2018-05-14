import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../../components/Icon'

function BookManage(props) {
  const selectLength = props.selectIndexList.length
  const isLoad = selectLength === 1
  const isSelect = selectLength > 0

  const isAllInTop = props.topNum ? Math.max(...props.selectIndexList) < props.topNum : false
  const isAllNotInTop = props.topNum ? Math.min(...props.selectIndexList) > props.topNum : false 

  return (
    <ul className="nav-list">
      <li className="list-item">
        {
          isSelect && (isAllInTop && isAllNotInTop)
          ? <a className="disabled" >
              <Icon src="dingbu" />
              <span>置顶</span>
            </a> 
          : <a className={isSelect ? '' : 'disabled'} 
              onClick={isAllInTop ? props.onButtonClick : props.onTopClick}>
              <Icon src={isAllInTop ? 'dingbujinzhi' : 'dingbu'} />
              <span>{isAllInTop ? '取消置顶' : '置顶'}</span>
            </a>
        }
      </li>
      <li className="list-item">
        <a className={isLoad ? '' : 'disabled'} 
          onClick={isLoad ? props.onLoadClick : null}>
          <Icon src="dingdan" />
          <span>详细</span>
        </a>
      </li>
      <li className="list-item">
        <a className={isSelect ? '' : 'disabled'}
          onClick={isSelect ? props.onDeleteClick : null} >
          <Icon src="shanchu" />
          <span>删除</span>
        </a>
      </li>
    </ul>
  )
}

BookManage.propTypes = {
  topNum: PropTypes.number.isRequired,
  selectIndexList: PropTypes.arrayOf(PropTypes.number).isRequired,
  onTopClick: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  onLoadClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

export default BookManage