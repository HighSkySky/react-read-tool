import { makeActionCreator } from './util'

export const FETCH_CHAPTER_START = 'FETCH_CHAPTER_START'
export const FETCH_CHAPTER_END = 'FETCH_CHAPTER_END'
export const TOGGLE_REVERSE_CHAPTER = 'TOGGLE_REVERSE_CHAPTER'

const initialState = {
  id: '',
  type: '',
  title: '',
  chapters: [],
  isReverse: false
}

export default function (state = initialState, action) {
  switch(action.type) {
    case FETCH_CHAPTER_END:
      return { ...state, ...action.value, isReverse: false }
    case TOGGLE_REVERSE_CHAPTER:
      return { ...state, isReverse: !state.isReverse }
    default:
      return state
  }
}

export const fetchChapterStart = makeActionCreator(FETCH_CHAPTER_START, 'data')
export const fetchChapterEnd = makeActionCreator(FETCH_CHAPTER_END, 'value')
export const toggleReverseChapter = makeActionCreator(TOGGLE_REVERSE_CHAPTER)
