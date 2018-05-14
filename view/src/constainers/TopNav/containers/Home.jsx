import React from 'react'
import { connect } from 'react-redux'

import Default from '../components/Default'
import BookManage from '../components/BookManage'

import { closeBookManage, addAllSelectIndexList, deleteAllSeleatIndexList } from '../../../reducers/home'

function Home(props) {
  return props.isManage 
    ? <BookManage onClose={props.closeManage}
      onSelect={props.addList}
      onClear={props.deleteList}
      isAllSelect={props.isAllSelect} /> 
    : <Default title="书架" />
}

const mapStateToProps = state => ({
  isManage: state.home.isManage,
  isAllSelect: !state.home.selectIndexList.some(item => item === false)
})

const mapDispatchToProps = dispatch => ({
  closeManage: () => dispatch(closeBookManage()),
  addList: () => dispatch(addAllSelectIndexList()),
  deleteList: () => dispatch(deleteAllSeleatIndexList())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)