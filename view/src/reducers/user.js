import { makeActionCreator } from './util'

export const INIT_USER_STATE = 'INIT_USER_STATE'
export const INIT_BOOK_LIST = 'INIT_BOOK_LIST'
export const ADD_BOOK_LIST = 'ADD_BOOK_LIST'
export const DELETE_BOOK_LIST = 'DELETE_BOOK_LIST'
export const CHANGE_BOOK_LIST = 'CHANGE_BOOK_LIST'
export const INIT_THEME = 'INIT_THEME'
export const TOGGLE_THEME = 'TOGGLE_THEME'
export const CHANGE_FONT_SIZE = 'CHANGE_FONT_SIZE'

const initialState = {
  data: {
    userId: null, // 用户id,未登录则为null
    bookList: [], // 书架书籍列表
    // loadNum: 10 // 预读章节数
  },
  ui: {
    fontSize: '18',
    theme: true // 白天 true, 夜间 false
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case INIT_BOOK_LIST:
      return { ...state, data: { ...state.data, bookList: action.list } }
    case ADD_BOOK_LIST:
      return { ...state, data: { ...state.data, bookList: [...state.data.bookList, action.value] } }
    case DELETE_BOOK_LIST:
      return { ...state, data: { ...state.data, bookList: [
         ...state.data.bookList.slice(0, action.index),
         ...state.data.bookList.slice(action.index + 1)
        ] } }
    case CHANGE_BOOK_LIST: 
      return { ...state, data: { ...state.data, bookList: action.list } }
    case INIT_THEME:
      return { ...state, ui: { ...state.ui, theme: action.theme === 'true' ? true : false } }
    case TOGGLE_THEME:
      return { ...state, ui: { ...state.ui, theme: !state.ui.theme } }
    case CHANGE_FONT_SIZE:
      return { ...state, ui: { ...state.ui, fontSize: Number(action.value) } }
    default:
      return state
  }
}

export const initUserState = makeActionCreator(INIT_USER_STATE)
export const initBookList = makeActionCreator(INIT_BOOK_LIST, 'list')
export const addBookList = makeActionCreator(ADD_BOOK_LIST, 'value')
export const deleteBookList = makeActionCreator(DELETE_BOOK_LIST, 'index')
export const changeBookList = makeActionCreator(CHANGE_BOOK_LIST, 'list')
export const initTheme = makeActionCreator(INIT_THEME, 'value')
export const toggleTheme = makeActionCreator(TOGGLE_THEME)
export const changeFontSize = makeActionCreator(CHANGE_FONT_SIZE, 'value')
