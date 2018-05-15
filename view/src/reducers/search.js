import { makeActionCreator } from './util'

export const CHANGE_SEARCH_INPUT = 'CHANGE_SEARCH_INPUT'
export const FETCH_SEARCH_START = 'FETCH_SEARCH_START'
export const FETCH_SEARCH_END = 'FETCH_SEARCH_END'
export const LOAD_MORE_SEARCH_RESULT = 'LOAD_MORE_SEARCH_RESULT'
export const SAVE_SEARCH_SCROLL_HEIGHT = 'SAVE_SEARCH_SCROLL_HEIGHT'
export const CLEAN_SEARCH_RESULT = 'CLEAN_SEARCH_RESULT'

const initalState = {
  input: '',
  result: {
    key: '',
    data: []
  },
  pageSize: 10,
  current: 1,
  scroll: 0
}

export default function (state = initalState, action) {
  switch(action.type) {
    case CHANGE_SEARCH_INPUT:
      return { ...state, input: action.value }
    case FETCH_SEARCH_END:
      return { ...state, result: action.result }
    case LOAD_MORE_SEARCH_RESULT:
      return { ...state, current: state.current + 1 }
    case SAVE_SEARCH_SCROLL_HEIGHT:
      return { ...state, scroll: action.height }
    case CLEAN_SEARCH_RESULT:
      return { ...state, result: { data: [], key: '' } }
    default:
      return state
  }
}

export const changeSearchInput = makeActionCreator(CHANGE_SEARCH_INPUT, 'value')
export const fetchSearchStart = makeActionCreator(FETCH_SEARCH_START, 'key')
export const fetchSearchEnd = makeActionCreator(FETCH_SEARCH_END, 'result')
export const loadMoreSearchResult = makeActionCreator(LOAD_MORE_SEARCH_RESULT)
export const saveSearchScrollHeight = makeActionCreator(SAVE_SEARCH_SCROLL_HEIGHT, 'height')
export const cleanSearchResult = makeActionCreator(CLEAN_SEARCH_RESULT)