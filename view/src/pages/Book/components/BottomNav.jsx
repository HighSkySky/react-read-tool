import React from 'react'
import { Link } from 'react-router-dom'

function BottomNav() {
  return (
    <footer id="book-footer">
      <ul>
        <li className="book-btn">
          <a className="book-btn-add">放入书架</a>
        </li>
        <li className="book-btn">
          <Link className="book-btn-read"
           to="/read">立即阅读</Link>
        </li>
      </ul>
    </footer>
  )
}

export default BottomNav