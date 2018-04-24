import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ResultItem from '../components/RsultItem'

// function Result(props) {
//   return (
//     <div className="result-warpped">
//       <div className="result-num">
//         搜索到{props.data.length}条结果
//       </div>
//       <ul className="result">
//         <li className="result-item">相关书籍</li>
//         {
//           props.data.slice(0, store.showTotal).map((item, index) =>
//             <li className="result-item" key={index}>
//               <Link to={{ pathname: '/book', search: `?id=${item.id}&type=${item.type}` }}>
//                 <div className="left">
//                   <BookImg id={item.id} type={item.type} />
//                 </div>
//                 <div className="right">
//                   <div className="title">{item.title}</div>
//                   <div className="author">{item.author}</div>
//                   <div className="info">最新章节：{item.latest_chapter}</div>
//                   <div className="info">更新时间：{item.update_time}</div>
//                 </div>
//               </Link>
//             </li>
//           )
//         }
//         {
//           store.showTotal < store.total
//             ? <li className="result-load">
//                 <a onClick={() => store.changeShowResult()}>单击加载更多内容</a>
//               </li>
//             : <li className="result-item">没有更多的内容了</li>
//         }
//       </ul>
//     </div>
//   )
// }

const mapStateToProps = (state) => ({
  data: state.search.result.data
})

@connect(mapStateToProps)
class Result extends React.Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      lastestChapter: PropTypes.string.isRequired,
      updateTime: PropTypes.string.isRequired
    }))
  }

  render() {
    return (
      <div className="result">
        <div className="result-num">
          搜索到{this.props.data.length}条结果
        </div>
        <ul className="result-list">
          <li className="result-item">相关书籍</li>
          {
            this.props.data.map((item, index) => (
              <li key={index} className="result-item">
                <ResultItem {...item} />
              </li>
            ))
          }
          <li className="result-item">没有更多的内容了</li>
        </ul>
      </div>
    )
  }
}

export default Result