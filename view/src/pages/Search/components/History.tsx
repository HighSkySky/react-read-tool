import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import Icon from '../../../components/Icon';
import HistoryItem from '../components/HistoryItem';

interface HistoryProps {
  history: Array<string>
}

function History(props: HistoryProps) {
  console.log(history)
  return null

  // return (
  //   <ul className="history">
  //     {
  //       props.history.map((item, index) => 
  //         <li className="history-item" key={index}>
  //           <HistoryItem value={item} />
  //         </li>
  //       )
  //     }
  //     {
  //       store.history.length !== 0 &&
  //       <li className="history-clear">
  //         <a>
  //           <Icon src="delete" />
  //           &nbsp;
  //           <span>清空搜索历史</span>
  //         </a>
  //       </li>
  //     }
  //   </ul>
  // )
}

export default History