import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import BookImg from '../../../components/BookImg'
import Icon from '../../../components/Icon'

class BookLink extends React.Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    isTop: PropTypes.bool.isRequired,
    // isSelect: PropTypes.bool.isRequired,
    isManage: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    history: PropTypes.string.isRequired,
    onTouch: PropTypes.func.isRequired,
    onAddClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      timer: null,
    }
  }

  componentWillUnmount() {
    this.closeTimer()
  }

  handleTouchStart = event => {
    const timer = setTimeout(() => {
      this.props.onTouch()
    }, 600)
    this.setState({ timer })
  }

  handleTouchMove = event => {
    this.closeTimer()
  }

  handleToggleClick = event => {
    const index = this.props.index
    this.props.isSelect
    // 取消选择
    ? this.props.onDeleteClick(index)
    : this.props.onAddClick(index)
  }

  closeTimer = () => {
    const timer = this.state.timer
    if (timer) {
      clearTimeout(timer)
    }
  }

  render() {
    return (
      <React.Fragment>
        {
          this.props.isManage &&
          <a className={`book manage-${this.props.isSelect}`}
            onClick={this.handleToggleClick}>
            <Icon src={this.props.isSelect ? 'yuanxingxuanzhongfill' : 'yuanxingweixuanzhong'} />
          </a>
        }
        <Link to={`/read?id=${this.props.id}&type=${this.props.type}&chapter=${this.props.history}`} 
          className="book"
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          onContextMenu={this.handleContextMenu} >
          <BookImg id={this.props.id} type={this.props.type} />
          <span>{this.props.isTop ? "[置顶]" : ''}&nbsp;{this.props.title}</span>
        </Link>
      </React.Fragment>
    )
  }
}

export default BookLink