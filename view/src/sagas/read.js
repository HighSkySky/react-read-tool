import { takeLatest, put } from 'redux-saga/effects'

import { FETCH_READ_START, fetchReadEnd } from '../reducers/read'
import { changeStatusToNormal, changeStatusToLoading, changeStatusToError } from '../reducers/status'

function* fetchRead(action) {
  const { id, type, chapter } = action.value
  const apiUrl = `/read?type=${type}&id=${id}&chapter=${chapter}`
  yield put(changeStatusToLoading())
  try {
    const response = yield fetch(apiUrl)
    const result = yield response.json()
    if (result.success === true) {
      yield put(fetchReadEnd(result.data))
      yield put(changeStatusToNormal())
    } else {
      throw new Error(result.msg)
    }
  } catch (error) {
    yield(put(changeStatusToError()))
  }
}


export default function* watch() {
  yield takeLatest(FETCH_READ_START, fetchRead)
}