import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'

import './index.css'

function Model(props) {
  return (
    <CSSTransitionGroup
    transitionName="example"
    transitionAppear={true}
    transitionAppearTimeout={200}
    transitionEnter={false}
    transitionLeave={false}>
      <div className="model">
        {props.children}
      </div>
    </CSSTransitionGroup>
  )
}

Model.propTypes = {
  children: PropTypes.element
}

export default Model