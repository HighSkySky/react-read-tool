import { all } from 'redux-saga/effects'

import statusSagas from './status'
import userSagas from './user'
import homeSagas from './home'
import bookSagas from './book'
import searchSagas from './search'
import readSagas from './read'

function* rootSagas() {
  yield all([
    statusSagas(),
    userSagas(),
    homeSagas(),
    bookSagas(),
    searchSagas(),
    readSagas()
  ])
}

export default rootSagas