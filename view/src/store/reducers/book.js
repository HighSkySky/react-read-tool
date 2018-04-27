// action type
export const INIT_BOOK_STATE = 'INIT_BOOK_STATE'
export const FETCH_BOOK = 'FETCH_BOOK'

const initialState = {
  id: '',
  type: '',
  style: '',
  title: '',
  author: '',
  updateTime: '',
  lastestChapter: '',
  intro: '',
  selectTime: '',
  chapters: []
}

const reducers = function(state = initialState, action) {
  switch(action.type) {
    case INIT_BOOK_STATE:
      return { type: INIT_BOOK_STATE, ...action.data }
    default:
      return state
  }
}

export default reducers

// action create
export const initBookState = (data) => {
  return { type: INIT_BOOK_STATE, data }
}

export const fetchBook = (data) => {
  return { type: FETCH_BOOK, data }
}