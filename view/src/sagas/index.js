import { all } from 'redux-saga/effects'

import statusSagas from './status'
import userSagas from './user'
import homeSagas from './home'
import bookSagas from './book'

function* rootSagas() {
  yield all([
    statusSagas(),
    userSagas(),
    homeSagas(),
    bookSagas()
  ])
}

export default rootSagas