import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import url from '../../util/url'

import Info from './components/Info'
import ReadLink from './components/ReadLink'

import './index.css'

import { fetchBookStart } from '../../reducers/book'

function Book(props) {
  const search = props.location.search
  const { type, id } = url.parse(search)

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
    <div id="book">
      <Info id={props.id}
        type={props.type}
        title={props.title}
        author={props.author}
        style={props.style}
        chapter={props.lastestChapter} />
      <div className="book-intro">
        {props.intro}
      </div>
      <ReadLink id={props.id}
        type={props.type}
        time={props.updateTime}
        chapter={props.lastestChapter} />
    </div>
  )
}

const mapStateToProps = state => ({
  ...state.book
})

const mapDispatchToProps = dispatch => ({
  fetchBook: (data) => dispatch(fetchBookStart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Book)