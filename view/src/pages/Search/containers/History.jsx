import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Icon from '../../../components/Icon'
import HistoryItem from '../components/HistoryItem'

import { changeSearchInput, deleteSearchHistory } from '../../../store/reducers/search'

function History(props) {
  return (
    <ul className="history">
      {
        props.history.map((item, index) => 
          <li className="history-item" key={index}>
            <HistoryItem value={item} onClick={props.selectInput} />
          </li>
        )
      }
      {
        props.history.length !== 0 &&
        <li className="history-clear">
          <a onClick={() => props.cleanHistory()}>
            <Icon src="shanchu" />
            &nbsp;
            <span>清空搜索历史</span>
          </a>
        </li>
      }
    </ul>
  )
}

History.propTypes = {
  history: PropTypes.arrayOf(PropTypes.string).isRequired
}

const mapStateToProps = (state) => ({
  history: state.search.history
})

const mapDispatchToProps = (dispatch) => ({
  selectInput: (value) => dispatch(changeSearchInput(value)),
  cleanHistory: () => dispatch(deleteSearchHistory())
})


export default connect(mapStateToProps, mapDispatchToProps)(History)