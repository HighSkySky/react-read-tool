import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import rootReducers from '../reducers'
import rootSagas from '../sagas'

const sagaMiddleware = createSagaMiddleware()

function configureStore(initialState) {
  const store = createStore(
    rootReducers,
    composeWithDevTools(),
    applyMiddleware(sagaMiddleware)

  )
  sagaMiddleware.run(rootSagas)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducers)
    })
  }

  return store
}

export default configureStore