import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Icon from '../../../components/Icon'

function Read(props) {
  return (
    <ul className="nav-list read"
      style={props.isShow ? {} : {height: '0' }}>
      <li className="list-item">
        <a>
          <Icon src="dingdan" />
          <span>详细</span>
        </a>
      </li>
      <li className="list-item">
        <a>
          <Icon src="zhengli" />
          <span>章节</span>
        </a>
      </li>
      <li className="list-item">
        <a>
          <Icon src="dibu" />
          <span>缓存</span>
        </a>
      </li>
      <li className="list-item">
        <a>
          <Icon src="A" />
          <span>字体</span>
        </a>
      </li>
      <li className="list-item">
        <a>
          <Icon src="yueliangwanshangyejianmoshiyejianqingxianxing" />
          <span>夜间</span>
        </a>
      </li>
    </ul>
  )
}

const mapStateToProps = state => ({
  isShow: state.read.ui.isShow
})

export default connect(
  mapStateToProps
)(Read)