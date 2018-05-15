import { takeLatest, put, select } from 'redux-saga/effects'

import { changeStatusToNormal, changeStatusToLoading, changeStatusToError } from '../reducers/status'
import { FETCH_SEARCH_START, CHANGE_SEARCH_INPUT, fetchSearchEnd, cleanSearchResult } from '../reducers/search'

function* fetchSearch(action) {
  const key = action.key
  const apiUrl = `/search?key=${key}`
  yield put(changeStatusToLoading())
  try {
    const response = yield fetch(apiUrl)
    const result = yield response.json()
    if (result.success === true) {
      yield put(fetchSearchEnd({data: result.data, key}))
      yield put(changeStatusToNormal())
    } else {
      throw new Error(result.msg)
    }
  } catch (error) {
    yield put(changeStatusToError())
  }
}

function* cleanResult() {
  const key = yield select(state => state.search.result.key)
  if (key) {
    console.log(key)
    yield put(cleanSearchResult())
  }
}

export default function* watch() {
  yield takeLatest(FETCH_SEARCH_START, fetchSearch)
  yield takeLatest(CHANGE_SEARCH_INPUT, cleanResult)
}