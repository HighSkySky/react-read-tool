import { all } from 'redux-saga/effects'

import statusSagas from './status'
import userSagas from './user'
import homeSagas from './home'
import bookSagas from './book'
import searchSagas from './search'

function* rootSagas() {
  yield all([
    statusSagas(),
    userSagas(),
    homeSagas(),
    bookSagas(),
    searchSagas()
  ])
}

export default rootSagas