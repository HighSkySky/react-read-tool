import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { initReadState, fetchReadStart, openReadNav, closeReadNav } from '../../reducers/read'
import { changeBookList } from '../../reducers/user'

import url from '../../util/url'

import TopTitle from './components/TopTitle'

import './index.css'

function Read(props) {
  const index = props.bookList.findIndex(item => item.id === props.id && item.type === props.type)
  if (index !== -1) {
    if (props.bookList[index].history !== props.chapter) {
      props.bookList[index].history = props.chapter
      props.changeBookList([...props.bookList])
    }
  } 

  return (
    <div id="read" onClick={props.isNavShow ? props.closeNav : props.openNav}
      className={props.theme ? undefined : 'neight'}>
      <TopTitle bookTitle={props.bookTitle}
        chapterTitle={props.title} />
      <div className="read-content">
        <div className="title"
            style={{fontSize: props.fontSize + 'px'}}>{props.title}</div>
        <br />
        <div dangerouslySetInnerHTML={{__html: props.content}}
          style={{fontSize: props.fontSize + 'px'}}></div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  ...state.read.data,
  isNavShow: state.read.ui.isNavShow,
  fontSize: state.user.ui.fontSize,
  theme: state.user.ui.theme,
  bookList: state.user.data.bookList
})

const mapDispatchToProps = dispatch => ({
  initState: () => dispatch(initReadState()),
  fetchRead: value => dispatch(fetchReadStart(value)),
  openNav: () => dispatch(openReadNav()),
  closeNav: () => dispatch(closeReadNav()),
  changeBookList: list => dispatch(changeBookList(list))
})

@connect(mapStateToProps, mapDispatchToProps)
class ReadWrap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      param: {
        id: '',
        type: '',
        chapter: ''
      },
      isSame: false
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const search = nextProps.location.search
    const param = url.parse(search)
    const { id, type, chapter } = nextProps
    // 检测store中是内容已否存在
    const isSame = id === param.id && type === param.type && chapter === param.chapter
    return { isSame, param }
  }

  componentDidMount() {
    this.fetchRead()
  }

  componentDidUpdate() {
    this.fetchRead()
  }

  componentWillUnmount() {
    window.scrollTo(0, 0)
  }

  fetchRead = () => {
    if (!this.state.isSame) {
      this.props.initState()
      this.props.fetchRead(this.state.param)
      window.scrollTo(0, 0)
    }
  }

  render() {
    // 参数校验
    const { id, type, chapter } = this.state.param
    const regex = /^[0-9]+$/
    if (!(regex.test(id) && 
          regex.test(type) &&
          regex.test(chapter))) {
      return <Redirect to="/404" />
    }

    if (!this.state.isSame) {
      return null
    }

    return <Read {...this.props} />
  }
}

export default ReadWrap