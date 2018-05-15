import React from 'react'
import PropTypes from 'prop-types'

import ResultItem from './RsultItem'

class Result extends React.Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      lastestChapter: PropTypes.string.isRequired,
      updateTime: PropTypes.string.isRequired
    })),
    pageSize: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    loadPage: PropTypes.func.isRequired
  }

  handleLoadPage = () => {
    this.props.loadPage()
  }

  render() {
    const pageNum = this.props.pageSize * this.props.current

    return (
      <div className="result">
        <div className="result-num">
          搜索到{this.props.data.length}条结果
        </div>
        <ul className="result-list">
          <li className="result-item">相关书籍</li>
          {
            this.props.data.slice(0, pageNum).map((item, index) => (
              <li key={index} className="result-item">
                <ResultItem {...item} />
              </li>
            ))
          }
         {
            pageNum < this.props.data.length
            ? <li className="result-load">
                 <a onClick={this.handleLoadPage}>单击加载更多内容</a>
               </li>
             : <li className="result-item">没有更多的内容了</li>
         }
        </ul>
      </div>
    )
  }
}

export default Result