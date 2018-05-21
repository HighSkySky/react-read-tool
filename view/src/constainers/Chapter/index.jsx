import React from 'react'
import { connect } from 'react-redux'

import { fetchChapterStart } from '../../reducers/chapter'

import url from '../../util/url'

import './index.css'

const mapStateToProps = state => ({
  ...state.chapter,
  chapter: state.read.data.chapter
})

const mapDispatchToProps = dispatch => ({
  fetchChapter: data =>  dispatch(fetchChapterStart(data))
})

@connect(mapStateToProps, mapDispatchToProps)
class Chapter extends React.Component {
  constructor(props) {
    super(props)
    this.select = React.createRef()
  }

  componentDidMount() {
    const search = this.props.location.search
    const param = url.parse(search)
    this.props.fetchChapter(param)
  }

  componentDidUpdate() {
    if (this.props.isReverse === false) {
      const target = document.querySelector('#chapter .active')
      if (target) {
        const height = window.innerHeight
        target.scrollIntoView(true)
        window.scrollBy(0, -height / 2)
      }
    } else {
      window.scrollTo(0, 0)
    }
  }

  render() {
    const { id, type, title, isReverse, chapter } = this.props
    if (id === '' || type === '') return null
    const chapters = isReverse ? [...this.props.chapters].reverse() : this.props.chapters
    
    return (

      <div id="chapter">
        <div className="title">{title}</div>
        <ul className="content">
          {
            chapters.map(item => (
              <li className="item" key={item.id}>
                <a href={'/read?' + url.toString({id, type, chapter: item.id})}
                  className={item.id === chapter ? 'active' : undefined}>
                  {item.title}
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Chapter