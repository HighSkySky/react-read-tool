import {
  takeLatest,
  put,
  select,
} from 'redux-saga/effects'

import {
  initSearchHistory,
  fetchSearchResultEnd,
  addSearchHistory,
  cleanSearchResult,
  INIT_SERACH_STATE,
  ADD_SEARCH_HISTORY,
  DELETE_SEARCH_HISTORY,
  CHANGE_SEARCH_INPUT,
  FETCH_SEARCH_RESULT_START,
} from '../reducers/search'

import {
  changeStatusToError,
  changeStatusToLoading,
  changeStatusToNormal
} from '../reducers/status'

function* loadHistory(action) {
  const historyString = localStorage.getItem('searchHistory')
  if (historyString) {
    try {
      const history = JSON.parse(historyString)
      yield put(initSearchHistory(history))
    } catch (error) {
      // 解析字符串失败，替换原字符串
      const history = []
      const newHistoryString = JSON.stringify(history)
      localStorage.setItem('searchHistory', newHistoryString)
    }
  }
}

function* saveHistory(action) {
  const history = yield select(state => state.search.history)
  const historyString = JSON.stringify(history)
  localStorage.setItem('searchHistory', historyString)
}

function* fetchSearch(action) {
  const key = action.key
  const apiUrl = `/search?key=${key}`
  yield put(changeStatusToLoading())
  try {
    const response = yield fetch(apiUrl)
    const result = yield response.json()
    if (result.success === true) {
      yield put(fetchSearchResultEnd(result.data))
      const history = yield select(state => state.search.history)
      if (!history.includes(key)) {
        yield put(addSearchHistory(key))
      }
      yield put(changeStatusToNormal())
    } else {
      throw new Error(result.msg)
    }
  } catch (error) {
    yield(put(changeStatusToError()))
  }
}

function* cleanResult() {
  const key = yield select(state => state.search.result.key)
  const input = yield select(state => state.search.input)
  if (key !== input) {
    yield put(cleanSearchResult())
  }
}

export default function* watch() {
  yield takeLatest(INIT_SERACH_STATE, loadHistory)
  yield takeLatest(ADD_SEARCH_HISTORY, saveHistory)
  yield takeLatest(DELETE_SEARCH_HISTORY, saveHistory)
  yield takeLatest(FETCH_SEARCH_RESULT_START, fetchSearch)
  yield takeLatest(CHANGE_SEARCH_INPUT, cleanResult)
}