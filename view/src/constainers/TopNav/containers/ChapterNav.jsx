import React from 'react'
import { connect } from 'react-redux'

import Icon from '../../../components/Icon'

import { toggleReverseChapter } from '../../../reducers/chapter'

function ChapterNav(props) {
  return (
    <div className="book">
      <a onClick={props.history.goBack}>
        <Icon src="xiangzuo1" />
      </a>
      <div className="title">章节目录</div>
      <a onClick={props.toggleChapter}>
        <Icon src="zhengli" />
      </a>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleChapter: () => dispatch(toggleReverseChapter())
})

export default connect(
  null,
  mapDispatchToProps
)(ChapterNav)