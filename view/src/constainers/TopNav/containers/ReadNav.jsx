import React from 'react'
import Transition from 'react-transition-group/Transition'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Icon from '../../../components/Icon'
import Model from '../../../components/Modal'

import { addBookList } from '../../../reducers/user'

class ReadNav extends React.Component {
  state = { isModalShow: false }

  modelClose = (state) => {
    this.setState({ isModalShow: false })
    state && this.modelOkClose()
    this.pushHistory()
  }

  modelOkClose = () => {
    const { id, type, title, chapter } = this.props
    this.props.addBookList({ id, type, title, history: chapter })
  }

  pushHistory = () => {
    this.props.history.length === 1 
    ? this.props.history.push('/') 
    : this.props.history.goBack()
  }

  handleBaclClick = () => {
    const { id, type, bookList } = this.props 
    const index = bookList.findIndex(item => item.id === id && item.type === type)
    const isInBookList = index !== -1 ? true : false
    isInBookList  
    ? this.pushHistory()    
    : this.setState({ isModalShow: true })
  }

  render() {
    const { isNavShow, id, type } = this.props

    return (
      <React.Fragment>
        <Transition in={isNavShow}
          timeout={200}
          appear={true}>
          {state => (
            <div className={'read ' + state}>
            <a onClick={this.handleBaclClick}>
              <Icon src="xiangzuo1" />
            </a>
            <Link className="chapter"
              to={`/chapter?id=${id}&type=${type}`}>
              <Icon src="leimu" />
            </Link>
          </div>
          )}
        </Transition>
        <Model okText="加入"
          cancelText="不加入"
          value={this.state.isModalShow}
          onClose={this.modelClose}>
          {`是否将"${this.props.title}"加入书架,以便下次阅读`}
        </Model>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  isNavShow: state.read.ui.isNavShow,
  id: state.read.data.id,
  type: state.read.data.type,
  title: state.read.data.bookTitle,
  chapter: state.read.data.chapter,
  bookList: state.user.data.bookList
})

const mapDispatchToProps = dispatch => ({
  addBookList: value => dispatch(addBookList(value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReadNav)