import React from 'react'
import { connect } from 'react-redux'

import Default from '../components/Default'
import BookManage from '../components/BookManage'

import { changeBookList } from '../../../reducers/user'
import { closeBookManage, changeTopNum } from '../../../reducers/home'

function Home(props) {
  const { bookList, selectList, isManage, topNum } = props
  const selectIndexList = []
  selectList.forEach((item, index) => item === true && selectIndexList.push(index))

  const handleTopClick = () => {
    const indexs  = [] // 被选中的下标
    const lists = [] // 被选中的数据
    selectList.forEach((item, index) => {
      if (item === true) {
        indexs.push(index) 
        lists.push(bookList[index])
        bookList[index] = undefined
      }  
    })
    const addTopNum = indexs.length
    props.changeTopNum(props.topNum + addTopNum)
    const newBookList = lists.concat(bookList).filter(item => item !== undefined)
    props.changeList(newBookList)
    props.closeManage()
  }

  const handleBottomClick = () => {
    const indexs  = [] // 被选中的下标
    const lists = [] // 被选中的数据
    selectList.forEach((item, index) => {
      if (item === true) {
        indexs.push(index) 
        lists.push(bookList[index])
        bookList[index] = undefined
      }  
    })
    const addTopNum = indexs.length
    const newTopNum = props.topNum - addTopNum
    props.changeTopNum(newTopNum)
    const newBookList = bookList.filter(item => item !== undefined)
    newBookList.splice(newTopNum, 0, ...lists)
    props.changeList(newBookList)
    props.closeManage()
  }

  const handleLoadClick = () => {
    const index = selectList.indexOf(true)
    const { id, type } = bookList[index]
    const url = `/book?id=${id}&type=${type}`
    props.history.push(url)
  }

  const handleDeleteClick = () => {
    const indexs  = []
    selectList.forEach((item, index) => {
      item === true && indexs.push(index)
    })
    const bookList = props.bookList.filter((item, index) => {
      return !indexs.includes(index)
    })
    props.changeList(bookList)
    props.closeManage()

  }

  return isManage 
    ? <BookManage
        topNum={topNum}
        selectIndexList={selectIndexList}
        onTopClick={handleTopClick} 
        onButtonClick={handleBottomClick}
        onLoadClick={handleLoadClick}
        onDeleteClick={handleDeleteClick} /> 
    : <Default />
}

const mapStateToProps = state => ({
  isManage: state.home.isManage,
  bookList: state.user.data.bookList,
  selectList: state.home.selectIndexList ,
  topNum: state.home.topNum
})

const mapDispatchToProps = dispatch => ({
  changeList: list => dispatch(changeBookList(list)),
  closeManage: () => dispatch(closeBookManage()),
  changeTopNum: num => dispatch(changeTopNum(num))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)