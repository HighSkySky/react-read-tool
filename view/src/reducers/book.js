import { makeActionCreator } from './util'

export const FETCH_BOOK_START = 'FETCH_BOOK_START'
export const FETCH_BOOK_END = 'FETCH_BOOK_END'

function initState() {
  return {
    id: '',
    type: '',
    style: '',
    title: '',
    author: '',
    updateTime: '',
    lastestChapter: '',
    intro:  '',
    selectTime: '',
    contents: []
  }
}

export default function (state = initState(), action) {
  switch(action.type) {
    // case FETCH_BOOK_START: 
    //   return initState()
    case FETCH_BOOK_END:
      return { ...state, ...action.data }
    default:
      return state
  }
}

export const fetchBookStart = makeActionCreator(FETCH_BOOK_START, 'data')
export const fetchBookEnd = makeActionCreator(FETCH_BOOK_END, 'data')