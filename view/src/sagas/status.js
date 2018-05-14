import { delay } from 'redux-saga'
import { takeLatest, put } from 'redux-saga/effects'

import { CHANGE_STATUS_TO_ERROR, changeStatusToNormal } from '../reducers/status'

function* closeErrorModel() {
  yield delay(1200)
  yield put(changeStatusToNormal)
}

export default function* watch() {
  yield takeLatest(CHANGE_STATUS_TO_ERROR, closeErrorModel)
}