import React from 'react'
import Transition from 'react-transition-group/Transition'

import { withRouter } from 'react-router-dom'

import ReadChapterNav from './ReadChapterNav'

import './index.css'

class ReadChapterNavWrap extends React.Component {
  componentDidUpdate() {
    if (this.props.isChapterShow) {
      const { id, type, chapterList } = this.props
      if (chapterList.id !== id || chapterList.type !== type) {
        this.props.fetchChapter({id, type})
      }
    }
  }

  render() {
    const { id, type, chapterList } = this.props
    if (chapterList.id !== id || chapterList.type !== type) return null
    if (chapterList.chapters.length === 0) return null

    return (
      <Transition in={this.props.isChapterShow}
        timeout={200}>
        { state => state === 'exited' 
            ? null 
            : <ReadChapterNav {...this.props} state={state} />
        }
      </Transition>
    )
  }
}


export default withRouter(ReadChapterNavWrap)