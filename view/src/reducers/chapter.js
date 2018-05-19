import { makeActionCreator } from './util'

export const FETCH_CHAPTER_START = 'FETCH_CHAPTER_START'
export const FETCH_CHAPTER_END = 'FETCH_CHAPTER_END'

const initialState = {
  id: '',
  type: '',
  title: '',
  chapters: []
}

export default function (state = initialState, action) {
  switch(action.type) {
    case FETCH_CHAPTER_END:
      return { ...state, ...action.value }
    default:
      return state
  }
}

export const fetchChapterStart = makeActionCreator(FETCH_CHAPTER_START, 'data')
export const fetchChapterEnd = makeActionCreator(FETCH_CHAPTER_END, 'value')