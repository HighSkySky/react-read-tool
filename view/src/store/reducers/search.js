// action type
export const INIT_SERACH_STATE = 'INIT_SEARCH_STATE'
export const CHANGE_SEARCH_INPUT = 'CHANGE_SEARCH_INPUT'
export const INIT_SEARCH_HISTORY = 'INIT_SEARCH_HISTORY'
export const ADD_SEARCH_HISTORY = 'ADD_SEARCH_HISTORY'
export const DELETE_SEARCH_HISTORY = 'DELETE_SEARCH_HISTORY'
export const FETCH_SEARCH_RESULT_START = 'FETCH_SEARCH_HISTORY_START'
export const FETCH_SEARCH_RESULT_END = 'FETCH_SEARCH_RESULT_END'

const initState = function() {
  return {
    input: '',
    history: [],
    result: {
      key: '',
      data: []
    }
  }
}

// reducers
const reducers = function(state = initState(), action) {
  switch(action.type) {
    case INIT_SERACH_STATE:
      return { ...initState() }
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
