// action type
export const INIT_SERACH_STATE = 'INIT_SEARCH_STATE'
export const CHANGE_SEARCH_INPUT = 'CHANGE_SEARCH_INPUT'
export const INIT_SEARCH_HISTORY = 'INIT_SEARCH_HISTORY'
export const ADD_SEARCH_HISTORY = 'ADD_SEARCH_HISTORY'
export const DELETE_SEARCH_HISTORY = 'DELETE_SEARCH_HISTORY'
export const FETCH_SEARCH_RESULT_START = 'FETCH_SEARCH_HISTORY_START'
export const FETCH_SEARCH_RESULT_END = 'FETCH_SEARCH_RESULT_END'
export const LOAD_MORE_SEARCH_RESULT = 'LOAD_MORE_SEARCH_RESULT'
export const CLEAN_SEARCH_RESULT = 'CLEAN_SEARCH_RESULT'
export const SAVE_SEARCH_SCROLL_HEIGHT = 'SAVE_SEARCH_SCROLL_HEIGHT'

const initialState = {
  input: '',
  history: [],
  result: {
    key: '',
    data: []
  },
  ui: {
    pageSize: 10,
    current: 1,
    scroll: 0
  }
}

// reducers
const reducers = function(state = initialState, action) {
  switch(action.type) {
    case CHANGE_SEARCH_INPUT:
      return { ...state, input: action.value }
    case INIT_SEARCH_HISTORY:
      return { ...state, history: action.history }
    case ADD_SEARCH_HISTORY:
      return { ...state, history: [...state.history, action.value] }
    case DELETE_SEARCH_HISTORY:
      return { ...state, history: [] }
    case FETCH_SEARCH_RESULT_START:
      return { ...state, result: { key: action.key, data: [] } }
    case FETCH_SEARCH_RESULT_END:
      return { ...state, result: { ...state.result, data: action.data } }
    case LOAD_MORE_SEARCH_RESULT:
      return { ...state, ui: { ...state.ui, current: state.ui.current + 1 } }
    case CLEAN_SEARCH_RESULT: 
      return { ...state, result: { key: '', data: [] } }
    case SAVE_SEARCH_SCROLL_HEIGHT:
      return { ...state, ui: { ...state.ui, scroll: action.value } }
    default:
      return state
  }
}

export default reducers

// action create
export const initSearchState = () => {
  return { type: INIT_SERACH_STATE }
}

export const changeSearchInput = (value) => {
  return { type: CHANGE_SEARCH_INPUT, value }
}

export const initSearchHistory = (history) => {
  return { type: INIT_SEARCH_HISTORY, history }
}

export const addSearchHistory = (value) => {
  return { type: ADD_SEARCH_HISTORY, value }
}

export const deleteSearchHistory = () => {
  return { type: DELETE_SEARCH_HISTORY }
}

export const fetchSearchResultStart = (key) => {
  return { type: FETCH_SEARCH_RESULT_START, key }
}

export const fetchSearchResultEnd = (data) => {
  return { type: FETCH_SEARCH_RESULT_END, data }
}

export const loadMoreSearchResult = () => {
  return { type: LOAD_MORE_SEARCH_RESULT }
}

export const cleanSearchResult = () => {
  return { type: CLEAN_SEARCH_RESULT }
}

export const saveSearchScrollHeight = (value) => {
  return { type: SAVE_SEARCH_SCROLL_HEIGHT, value }
}