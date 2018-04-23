import { all } from 'redux-saga/effects'

import statusSaga from './status'
import searchSage from './search'

export default function* rootSaga() {
  yield all([
    statusSaga(),
    searchSage()
  ])
}