import { all } from 'redux-saga/effects'

import statusSaga from './status'
import searchSage from './search'
import bookSaga from './book'

export default function* rootSaga() {
  yield all([
    statusSaga(),
    searchSage(),
    bookSaga()
  ])
}