import * as React from 'react';

import Icon from '../../../components/Icon';

interface HistoryItemProps {
  value: string,
  onClick: (event: any) => void
}

function HistoryItem(props: HistoryItemProps) {
  return (
    <a onClick={props.onClick}>
      <Icon src="clock" />
      &nbsp;&nbsp;
      <span>{props.value}</span>
    </a>
  );
}

export default HistoryItem;