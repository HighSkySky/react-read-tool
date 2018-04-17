import React from 'react'
import { NavLink } from 'react-router-dom'

import Icon from '../Icon'

import './index.css'

function BottomNav() {
  return (
    <footer id="bottom-nav">
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
          <NavLink to="/set">
            <Icon src="others" />
            <span>设置</span>
          </NavLink>
        </li>
      </ul>
    </footer>
  )
}

export default BottomNav