import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Icon from '../../../components/Icon'

function Read(props) {
  return (
    <div className="read" 
      style={props.isShow ? {} : {height: '0' }}>
      <a onClick={props.history.goBack}>
        <Icon src="xiangzuo1" />
      </a>
      <Link className="chapter"
        to={`/chapter?id=${props.id}&type=${props.type}`}>
        <Icon src="leimu" />
      </Link>
    </div>
  )
}

const mapStateToProps = state => ({
  isShow: state.read.ui.isShow
})

export default connect(
  mapStateToProps
)(Read)