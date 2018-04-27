import {
  takeLatest,
  put
} from 'redux-saga/effects'

import {
  FETCH_BOOK,
  initBookState
} from '../reducers/book'

import {
  changeStatusToError,
  changeStatusToLoading,
  changeStatusToNormal
} from '../reducers/status'


function* fetchBook(action) {
  const { id, type } = action.data
  const apiUrl = `/book?type=${type}&id=${id}`
  yield put(changeStatusToLoading())
  try {
    const response = yield fetch(apiUrl)
    const result = yield response.json()
    if (result.success === true) {
      yield put(initBookState(result.data))
      yield put(changeStatusToNormal())
    } else {
      throw new Error(result.msg)
    }
  } catch (error) {
    yield(put(changeStatusToError()))
  }
}

export default function* watch() {
  yield takeLatest(FETCH_BOOK, fetchBook)
}