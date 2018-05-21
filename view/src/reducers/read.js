import { makeActionCreator } from './util'

export const INIT_READ_STATE = 'INIT_READ_STATE'
export const FETCH_READ_START = 'FETCH_READ_START'
export const FETCH_READ_END = 'FETCH_READ_END'
export const OPEN_READ_NAV = 'OPEN_READ_NAV'
export const CLOSE_READ_NAV = 'CLOSE_READ_NAV'
export const OPEN_READ_CHAPTER_NAV = 'OPEN_READ_CHAPTER_NAV'
export const OPEN_READ_FONT_NAV = 'OPEN_READ_FONT_NAV'
export const CLOSE_ALL_READ_NAV = 'CLOSE_ALL_READ_NAV'

const initUiState = function () {
  return {
    isNavShow: false,
    isChapterShow: false,
    isFontShow: false
  }
}

const initDataState = function () {
  return {
    id: '',
    type: '',
    bookTitle: '',
    chapter: '',
    title: '',
    content: '',
    lastId: '',
    nextId: ''
  }
}

const initState = function () {
  return {
    data: {...initDataState()},
    ui: {...initUiState()}
  }
}

export default function (state = initState(), action) {
  switch(action.type) {
    case INIT_READ_STATE:
      return { data: initDataState(), ui: { ...initUiState(), isChapterShow: state.ui.isChapterShow } }
    case FETCH_READ_END:
      return { ...state, data: { ...state.data, ...action.value } }
    case OPEN_READ_NAV:
      return { ...state, ui: { ...initUiState(), isNavShow: true} }
    case CLOSE_READ_NAV:
      return { ...state, ui: { ...initUiState(), isNavShow: false } }
    case OPEN_READ_CHAPTER_NAV:
      return { ...state, ui: { ...initUiState(), isChapterShow: true } }
    case OPEN_READ_FONT_NAV:
      return { ...state, ui: { ...initUiState(), isFontShow: true } }
    case CLOSE_ALL_READ_NAV:
      return { ...state, ui: { ...initUiState() } }
    default:
      return state
  }
}

export const initReadState = makeActionCreator(INIT_READ_STATE)
export const fetchReadStart = makeActionCreator(FETCH_READ_START, 'value')
export const fetchReadEnd = makeActionCreator(FETCH_READ_END, 'value')
export const openReadNav = makeActionCreator(OPEN_READ_NAV)
export const closeReadNav = makeActionCreator(CLOSE_READ_NAV)
export const openReadChpaterNav = makeActionCreator(OPEN_READ_CHAPTER_NAV)
export const openReadFontNav = makeActionCreator(OPEN_READ_FONT_NAV)
export const closeAllReadNav = makeActionCreator(CLOSE_ALL_READ_NAV)