import React from 'react'
import { connect } from 'react-redux'

import ReadDefaultNav from '../components/ReadDefaultNav'
import ReadChapterNav from './ReadChapterNav'
import ReadFontNav from './ReadFontNav'

import { toggleTheme, changeFontSize } from '../../../reducers/user'
import { closeAllReadNav, openReadChpaterNav, openReadFontNav } from '../../../reducers/read'
import { fetchChapterStart } from '../../../reducers/chapter'

const mapStateToProps = state => ({
  ...state.read.ui,
  id: state.read.data.id,
  type: state.read.data.type,
  chapter: state.read.data.chapter,
  ...state.user.ui,
  chapterList: state.chapter,
})

const mapDispatchToProps = dispatch => ({
  fetchChapter: data => dispatch(fetchChapterStart(data)),
  closeAllNav: () => dispatch(closeAllReadNav()),
  openChapter: () => dispatch(openReadChpaterNav()),
  openFont: () => dispatch(openReadFontNav()),
  toggleTheme: () => dispatch(toggleTheme()),
  changeFontSize: value => dispatch(changeFontSize(value)) 
})

@connect(mapStateToProps, mapDispatchToProps)
class ReadNav extends React.Component {
  stopTouch = function (event) {
    event.preventDefault()
  }

  addStopTouch = () => {
    // ios11.3之前不加passive,preventDefault无效
    document.addEventListener('touchmove', this.stopTouch, { passive: false }) 
    //passive 参数不能省略，用来兼容ios和android
  }

  removeStopTouch = () => {
    document.removeEventListener('touchmove', this.stopTouch)
  }

  componentDidMount() {
    this.props.isChapterShow || this.props.isFontShow 
    ? this.addStopTouch() : this.removeStopTouch()
  }

  componentDidUpdate() {
    this.props.isChapterShow || this.props.isFontShow 
    ? this.addStopTouch() : this.removeStopTouch()
  }

  componentWillUnmount() {
    this.removeStopTouch ()
  }

  render() {    
    const { id, type, chapter, chapterList, theme, isNavShow, isChapterShow, isFontShow, fontSize } = this.props
    const { toggleTheme, openChapter, openFont, closeAllNav, fetchChapter, changeFontSize } = this.props

    const isTransition = isChapterShow === false && isFontShow === false ? true : false

    return (
      <React.Fragment>
        <ReadDefaultNav id={id}
          type={type}
          theme={theme}
          isNavShow={isNavShow}
          toggleTheme={toggleTheme}
          openChapter={openChapter}
          openFont={openFont}
          isTransition={isTransition} />
        <ReadChapterNav id={id}
          type={type}
          chapter={chapter} 
          chapterList={chapterList} 
          onClose={closeAllNav}
          fetchChapter={fetchChapter} 
          isChapterShow={isChapterShow} /> 
        <ReadFontNav
          isFontShow={isFontShow}
          fontSize={fontSize}
          changeFontSize={changeFontSize}
          onClose={closeAllNav} />
      </React.Fragment>
    )
  }
}

export default ReadNav