import React from 'react'
import Transition from 'react-transition-group/Transition'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Icon from '../../../components/Icon'

function ReadNav(props) {
  const { isNavShow, isChapterShow, id, type } = props

  const isTransition = isChapterShow === false ? true : false

  if (isTransition === false) return null

  return (
    <Transition in={isNavShow}
      timeout={200}
      appear={true}>
      {state => (
        <div className={'read ' + state}>
        <a onClick={props.history.goBack}>
          <Icon src="xiangzuo1" />
        </a>
        <Link className="chapter"
          to={`/chapter?id=${id}&type=${type}`}>
          <Icon src="leimu" />
        </Link>
      </div>
      )}
    </Transition>
  )
}

const mapStateToProps = state => ({
  ...state.read.ui,
  id: state.read.data.id,
  type: state.read.data.type
})

export default connect(
  mapStateToProps
)(ReadNav)