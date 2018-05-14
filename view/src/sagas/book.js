import { takeLatest, put } from 'redux-saga/effects'

import { FETCH_BOOK_START, fetchBookEnd } from '../reducers/book'
import { changeStatusToNormal, changeStatusToLoading, changeStatusToError } from '../reducers/status'

function* fetchBook(action) {
  const { id, type} = action.data
  const apiUrl = `/book?type=${type}&id=${id}`
  yield put(changeStatusToLoading())
  try {
    const response = yield fetch(apiUrl)
    const result = yield response.json()
    if (result.success === true) {
      yield put(fetchBookEnd(result.data))
      yield put(changeStatusToNormal())
    } else {
      throw new Error(result.msg)
    }
  } catch (error) {
    yield(put(changeStatusToError()))
  }
}

export default function* watch() {
  yield takeLatest(FETCH_BOOK_START, fetchBook)
}