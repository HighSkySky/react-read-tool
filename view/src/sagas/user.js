import { takeLatest, put, select } from 'redux-saga/effects'

import { INIT_USER_STATE, ADD_BOOK_LIST, DELETE_BOOK_LIST, CHANGE_BOOK_LIST, 
  CHANGE_FONT_SIZE, TOGGLE_THEME, initBookList, changeFontSize, initTheme } from '../reducers/user'
import { CHANGE_TOP_NUM, changeTopNum } from '../reducers/home'


function* loadBookList() {
  const bookListString = localStorage.getItem('bookList')
  if (bookListString) {
    try {
      const bookList = JSON.parse(bookListString)
      yield put(initBookList(bookList))
    } catch (error) {
      // 解析字符串失败,替换字符串
      const bookList = []
      const bookListString = JSON.stringify(bookList)
      localStorage.setItem('bookList', bookListString)
    }
  }
} 

function* saveBookList() {
  const bookList = yield select(state => state.user.data.bookList)
  const bookListString = JSON.stringify(bookList)
  localStorage.setItem('bookList', bookListString)
}

function* saveTheme() {
  const theme = yield select(state => state.user.ui.theme)
  localStorage.setItem('theme', theme)
}

function* makeloadCreator(action, key, defaultValue) {
  let string = localStorage.getItem(key)
  if (string) {
    yield put(action(string))
  } else {
    string = defaultValue
    localStorage.setItem(key, defaultValue)
  }
}

function makeSaveCreator(actionkey, saveKey) {
  return function* (action) {
    const value = yield action[actionkey]
    localStorage.setItem(saveKey, value)
  }
}

function* loadUserSet() {
  yield loadBookList()
  yield makeloadCreator(changeTopNum, 'topNum', 0)
  yield makeloadCreator(changeFontSize, 'value', 18)
  yield makeloadCreator(initTheme, 'theme', true)
}

export default function* watch() {
  yield takeLatest(INIT_USER_STATE, loadUserSet)
  yield takeLatest(ADD_BOOK_LIST, saveBookList)
  yield takeLatest(DELETE_BOOK_LIST, saveBookList)
  yield takeLatest(CHANGE_BOOK_LIST, saveBookList)
  yield takeLatest(CHANGE_TOP_NUM, makeSaveCreator('num', 'topNum'))
  yield takeLatest(CHANGE_FONT_SIZE, makeSaveCreator('value', 'fontSize'))
  yield takeLatest(TOGGLE_THEME, saveTheme)
}