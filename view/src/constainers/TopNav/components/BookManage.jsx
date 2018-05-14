import React from 'react'
import PropTypes from 'prop-types'

function BookManage(props) {
  return (
    <div className="manage">
      <a className="button" 
        onClick={props.onClose}>完成</a>
      <div className="manage-title">
        <span>书籍管理</span>
        <span className="manage-num">已选择0本书籍</span>
      </div>
      <a className="button"
        onClick={props.isAllSelect ? props.onClear : props.onSelect }>
        { props.isAllSelect ? '取消' : '全选' }  
      </a>
    </div>
  )
}

BookManage.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  isAllSelect: PropTypes.bool.isRequired
}

export default BookManage