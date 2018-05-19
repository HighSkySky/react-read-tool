import React from 'react'
import PropTypes from 'prop-types'
import Transition from 'react-transition-group/Transition'

import NavButton from './NavButton'

import url from '../../../util/url'

function ReadDefaultNav(props) {
  const { id, type, theme, isNavShow, isTransition } = props
  const { openChapter, openFont, toggleTheme } = props

  if (isTransition === false) return null

  return (
    <Transition in={isNavShow}
      timeout={200}
      appear={true}>
      { state => (        
          <ul className={['nav-list', 'read',  state].join(' ')}>
            <li className="list-item">
              <NavButton icon="dingdan"
                to={'/book?' + url.toString({id, type})}>详细</NavButton>
            </li>
            <li className="list-item">
              <NavButton icon="zhengli" onClick={openChapter}>章节</NavButton>
            </li>
            <li className="list-item">
              <NavButton icon="dibu">缓存</NavButton>
            </li>
            <li className="list-item">
              <NavButton icon="A" onClick={openFont}>设置</NavButton>
            </li>
            <li className="list-item">
              <NavButton icon="yueliangwanshangyejianmoshiyejianqingxianxing"
                value={theme}
                onClick={toggleTheme}>夜间</NavButton>
            </li>
          </ul>
      )}
    </Transition>
  )
}

ReadDefaultNav.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  theme: PropTypes.bool.isRequired,
  isNavShow: PropTypes.bool.isRequired,
  isTransition: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
  openChapter: PropTypes.func.isRequired,
  openFont: PropTypes.func.isRequired
}

export default ReadDefaultNav