import { takeLatest, put } from 'redux-saga/effects'

import { FETCH_CHAPTER_START, fetchChapterEnd } from '../reducers/chapter'
import { changeStatusToNormal, changeStatusToLoading, changeStatusToError } from '../reducers/status'

function* fetchChapter(action) {
  const { id, type} = action.data
  const apiUrl = `/chapter?type=${type}&id=${id}`
  yield put(changeStatusToLoading())
  try {
    const response = yield fetch(apiUrl)
    const result = yield response.json()
    if (result.success === true) {
      yield put(fetchChapterEnd(result.data))
      yield put(changeStatusToNormal())
    } else {
      throw new Error(result.msg)
    }
  } catch (error) {
    yield(put(changeStatusToError()))
  }
}

export default function* watch() {
  yield takeLatest(FETCH_CHAPTER_START, fetchChapter)
}