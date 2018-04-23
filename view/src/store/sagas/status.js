import {
  delay
} from 'redux-saga'
import {
  takeLatest,
  put
} from 'redux-saga/effects'
import {
  CHANGE_STATUS_TO_LOADING,
  CHANGE_STATUS_TO_ERROR,
  changeStatusToNormal
} from '../reducers/status'

function startLoading() {

}

function* startError() {
  yield delay(3000)
  yield put(changeStatusToNormal())
}

export default function* watch() {
  yield takeLatest(CHANGE_STATUS_TO_LOADING, startLoading)
  yield takeLatest(CHANGE_STATUS_TO_ERROR, startError)
}