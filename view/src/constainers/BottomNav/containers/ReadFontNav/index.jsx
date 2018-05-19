import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Transition from 'react-transition-group/Transition'

import Icon from '../../../../components/Icon'

import './index.css'

function ReadFont(props) {
  const { fontSize, changeFontSize, onClose, isFontShow} = props

  const addFontSize = () => {
    changeFontSize(fontSize + 2)
  }

  const deleteFontSize = () => {
    changeFontSize(fontSize - 2)
  }

  const node = (
    <Transition in={isFontShow}
      timeout={200}>
      {state => state === 'exited'
        ? null
        : (<div id="read-font" onClick={onClose}>
            <div className={"wrapped " + state}>
              <div className="main" onClick={event => event.stopPropagation()}>
                <div className="row">
                  <a className={["button", fontSize <= 16 ? 'disabled' : ''].join(' ')} 
                    onClick={fontSize <= 16 ? undefined : deleteFontSize}>
                    <Icon src="yueduye_zitijianxiao" />
                  </a>
                  <a className={["button", fontSize >= 24 ? 'disabled' : ''].join(' ')}
                    onClick={fontSize >= 24 ? undefined : addFontSize}>
                    <Icon src="yueduye_zitizengda" />
                  </a>
                </div>
              </div>
            </div>
          </div>)
        }
    </Transition>
  )

  return ReactDOM.createPortal(
    node,
    document.body
  )
}

ReadFont.propTypes = {
  isFontShow: PropTypes.bool.isRequired,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClose: PropTypes.func.isRequired,
  changeFontSize: PropTypes.func.isRequired
}

export default ReadFont