import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import TopNav from './components/TopNav'
import BottomNav from './components/BottomNav'
import BookImg from '../../components/BookImg'
import { fetchBook } from '../../store/reducers/book'

import { parse } from '../../util/url'

import './index.css'

function Book(props) {
  const searchString = props.location.search
  const { id, type } = parse(searchString)

  // 参数校验
  const regex = /^[0-9]+$/
  if (!(regex.test(id) && regex.test(type))) {
    return <Redirect to="/404" />
  }
  
  // 检测store中是内容已否存在
  if (props.id !== id && props.type !== type) {
    props.fetchBook({ id, type })
    return null
  }
  

  return (
    <React.Fragment>
      <TopNav />
      <div id="main">
        <div id="book">
          <div className="info">
            <div className="left">
              <BookImg id={id} type={type} />
            </div>
            <div className="right">
              <div className="title">{props.title}</div>
              <div className="author">作者：{props.author}</div>
              <div className="type">类型：{props.style}</div>
              <div className="new">最新章节: {props.lastestChapter}</div>
            </div>
          </div>
          <div className="intro">{props.intro}</div>
        </div>
      </div>
      <BottomNav />
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  ...state.book
})

const mapDispatchToProps = (dispatch) => ({
  fetchBook: (data) => dispatch(fetchBook(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Book)