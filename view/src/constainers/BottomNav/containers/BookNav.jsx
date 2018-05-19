import React from 'react'
import { connect } from 'react-redux'

import { addBookList, deleteBookList } from '../../../reducers/user'

function BookNav(props) {
  // 参数校验
  if (props.id === '' || props.type === '') return null

  // 判断书是否已经被收藏
  const index = props.bookList.findIndex(
    item => item.id === props.id && item.type === props.type
  )

  const firstChapter = props.chapters[0].id

  // 定义收藏信息
  const value = {
    id: String(props.id),
    type: String(props.type),
    title: props.title,
    history: firstChapter
  }

  const handleStartClick = () => {
    let url = index === -1 
      ? `/read?id=${props.id}&type=${props.type}&chapter=${firstChapter}`
      : `/read?id=${props.id}&type=${props.type}&chapter=${props.bookList[index].history}`
    props.history.push(url)
  }

  return (
    <ul className="nav-list book">
      <li className="list-item">
        <a>下载</a>
      </li>
      <li className="list-item">
        <a className="start"
          onClick={handleStartClick}>
          { index === -1 || props.bookList[index].history === firstChapter
            ? '开始阅读' : '继续阅读' }
        </a>
      </li>
      <li className="list-item">
        {
          index === -1 
          ? <a onClick={() => props.addList(value)}>加入书架</a>
          : <a onClick={() => props.deleteList(index)}>移出书架</a> 
        }
      </li>
    </ul>
  )
}

const mapStateToProps = state => ({
  id: state.book.id,
  type: state.book.type, 
  title: state.book.title,
  chapters: state.book.chapters,
  bookList: state.user.data.bookList
})

const mapDispatchToProps = dispatch => ({
  addList: value => dispatch(addBookList(value)),
  deleteList: index => dispatch(deleteBookList(index))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookNav)