import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Icon from '../../../components/Icon'

function NavButton(props) {
  const children = (
    <React.Fragment>
      <Icon src={props.icon} />
      <span>{props.children}</span>
    </React.Fragment>
  )

  return props.to
  ? <Link to={props.to}>{children}</Link>
  : <a className={props.value ? 'active' : undefined} 
      onClick={props.onClick || null}>{children}</a>
}

NavButton.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  value: PropTypes.bool
}

NavButton.defaultProps = {
  value: false
}

export default NavButton