import { takeLatest, put, select } from 'redux-saga/effects' 

import { OPEN_BOOK_MANAGE, CLOSE_BOOK_MANAGE, initSelectIndexList } from '../reducers/home'

function* initList() {
  const length = yield select(state => state.user.data.bookList.length)
  const list = new Array(length).fill(false)
  yield put(initSelectIndexList(list))
}

function* clearList() {
  const list = []
  yield put(initSelectIndexList(list))
}

export default function* watch() {
  yield takeLatest(OPEN_BOOK_MANAGE, initList)
  yield takeLatest(CLOSE_BOOK_MANAGE, clearList)
}