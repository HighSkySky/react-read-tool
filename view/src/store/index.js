import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from './reducers'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

function configureStore() {
  const store = createStore(
    reducers,
    composeWithDevTools(),
    applyMiddleware(sagaMiddleware)
  )
  
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index');
      store.replaceReducer(nextRootReducer);
    })
  }

  sagaMiddleware.run(sagas)

  return store;
}

export default configureStore()




