import React from 'react'
import { connect } from 'react-redux'

import BookLink from './components/BookLink'

import './index.css'

import { 
  openBookManage, 
  closeBookManage,
  addSelectIndexList,
  deleteSelectIndexList
} from '../../reducers/home'

const mapStateToProps = state => ({
  bookList: state.user.data.bookList,
  isManage: state.home.isManage,
  topNum: state.home.topNum,
  selectList: state.home.selectIndexList
})

const mapDispatchToProps = dispatch => ({
  openManage: () => dispatch(openBookManage()),
  closeManage: () => dispatch(closeBookManage()),
  addList: (index) => dispatch(addSelectIndexList(index)),
  deleteList: (index) => dispatch(deleteSelectIndexList(index))
})

@connect(mapStateToProps, mapDispatchToProps)
class Home extends React.Component{
  componentWillUnmount() {
    this.props.closeManage()
  }

  render() {
    return (
      <div id="home">
        <ul className="book-list">
          {
            this.props.bookList.map((item, index) => (
              <li key={index} className="item">
                <BookLink {...item} 
                  index={index}
                  isTop={index < this.props.topNum}
                  isSelect={this.props.selectList[index]}
                  isManage={this.props.isManage}
                  onAddClick={this.props.addList}
                  onDeleteClick={this.props.deleteList}
                  onTouch={this.props.openManage} />
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Home