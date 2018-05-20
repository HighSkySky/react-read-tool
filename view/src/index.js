import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import configureStore from './store'
import servicework from './servicework'

const render = (Component) => {
  ReactDOM.render(
    <Provider store={configureStore()}>
      <Component />
    </Provider>,
    document.getElementById('root')
  )
}  

servicework()
render(App)


