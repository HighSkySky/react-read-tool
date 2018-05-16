import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { initReadState, fetchReadStart, toggleReadNavShow } from '../../reducers/read'

import url from '../../util/url'

import TopTitle from './components/TopTitle'

import './index.css'

function Read(props) {
  const search = props.location.search
  const param = url.parse(search)

  // 参数校验
  const regex = /^[0-9]+$/
  if (!(regex.test(param.id) && 
        regex.test(param.type) &&
        regex.test(param.chapter))) {
    return <Redirect to="/404" />
  }

  // console.log(param.id !== props.id || 
  //        param.type !== props.type || 
  //        param.chapter !== props.chapter)
  
  // 检测store中是内容已否存在
  if (param.id !== props.id || 
      param.type !== props.type || 
      param.chapter !== props.chapter) {
        props.initState()
        props.fetchRead(param)
        return null
      }

  return (
    <div id="read" onClick={() => props.toggleNav()}>
      <TopTitle bookTitle={props.bookTitle}
        chapterTitle={props.title} />
      <div className="title">{props.title}</div>
      <br />
      <div dangerouslySetInnerHTML={{__html: props.content}}></div>
    </div>
  )
}

const mapStateToProps = state => ({
  ...state.read.data,
  ...state.read.ui
})

const mapDispatchToProps = dispatch => ({
  initState: () => dispatch(initReadState()),
  fetchRead: value => dispatch(fetchReadStart(value)),
  toggleNav: () => dispatch(toggleReadNavShow())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Read)