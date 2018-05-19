import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Slider from '../../../../components/Slider'
import Icon from '../../../../components/Icon'

import url from '../../../../util/url'

class ReadChapterNav extends React.Component {
  static propTypes = {
    fetchChapter: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    chapter: PropTypes.string.isRequired,
    chapterList: PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      chapters: PropTypes.array.isRequired
    }),
    onClose: PropTypes.func.isRequired,
    state: PropTypes.string.isRequired
  }  

  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
    // 存放跳转的记录
    this.list = []
  } 

  static getDerivedStateFromProps(nextProps, prevState) {
    const index = nextProps.chapterList.chapters.findIndex(item => item.id === nextProps.chapter)
    return { ...prevState, index }
  }

  stopPropagation = function(event) {
    event.stopPropagation()
  }

  pushHistory = (index, isSave = true) => {
    const { id, type, chapterList } = this.props
    const chapter = chapterList.chapters[index].id
    const nextUrl = '/read?' + url.toString({ id, type, chapter })
    this.props.history.replace(nextUrl)
    isSave && this.list.push(this.state.index)
  }

  changeValue = (value) => {
    const length = this.props.chapterList.chapters.length
    let index = value <= 0 ? 0 : Math.round((length * value) / 100 - 1)
    this.setState({ index })
  }

  selectValue = (value) => {
    const length = this.props.chapterList.chapters.length
    let index = value <= 0 ? 0 : Math.round((length * value) / 100 - 1)
    this.pushHistory(index)
  }

  handleBackClick = () => {
    const index = this.list.pop()
    this.pushHistory(index, false)
  }

  handleLeftClick = () => {
    const index = this.state.index
    const lastIndex = index - 1
    this.pushHistory(lastIndex)
  }

  handleRightClick = () => {
    const index = this.state.index
    const nextIndex = index + 1
    this.pushHistory(nextIndex)
  }

  render() {
    const length = this.props.chapterList.chapters.length
    const value = ((this.state.index + 1) / length  * 100).toFixed(1)
    const index = this.state.index

    const node = (
      <div id="read-chapter" onClick={this.props.onClose}>
        <div className={"wrapped " + this.props.state}>
          <div className="main" onClick={this.stopPropagation}>
            <div className="row">
              <a className={index === 0 ? 'disabled' : undefined}
                onClick={index === 0 ? undefined : this.handleLeftClick}>
                <Icon src="xiangzuo1" />
              </a>
              <div className="title">
                <span>{this.props.chapterList.chapters[index].title}</span>
                <span className="index">{value + '%'}</span>
              </div>
              <a className={index === length ? 'disabled' : undefined}
                onClick={index === length ? undefined : this.handleRightClick}>
                <Icon src="xiangyou1" />
              </a>
            </div>
            <div className="row">
              <Slider value={value}
                onInput={this.changeValue} 
                onChange={this.selectValue} />
              <a className={["back", this.list.length === 0 ? 'disabled' : undefined ].join(' ')}
                onClick={this.list.length === 0 ? undefined: this.handleBackClick}>
                <Icon src="chexiao" />
              </a>
            </div>
          </div>
        </div>
      </div>
    )

    return ReactDOM.createPortal(
      node,
      document.body
    )
  }
}

export default ReadChapterNav