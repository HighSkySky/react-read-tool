import React from 'react'
import { NavLink } from 'react-router-dom'

import Icon from '../../../components/Icon'

function DefaultNav() {
  return (
    <ul className="nav-list">
      <li className="list-item">
        <NavLink to="/" exact={true}>
          <Icon src="caidan" />
          <span>书架</span>
        </NavLink>
      </li>
      <li className="list-item">
        <NavLink to="/search">
          <Icon src="sousuo" />
          <span>搜索</span>
        </NavLink>
      </li>
      <li className="list-item">
        <NavLink to="/more">
          <Icon src="others" />
          <span>更多</span>
        </NavLink>
      </li>
    </ul>
  )
}

export default DefaultNav
