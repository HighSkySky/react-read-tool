import { makeActionCreator } from './util'

export const INIT_READ_STATE = 'INIT_READ_STATE'
export const FETCH_READ_START = 'FETCH_READ_START'
export const FETCH_READ_END = 'FETCH_READ_END'
export const TOGGLE_READ_NAV_SHOW = 'TOGGLE_READ_NAV_SHOW' 

const initState = function () {
  return {
    data: {
      id: '',
      type: '',
      bookTitle: '',
      chapter: '',
      title: '',
      content: '',
      lastId: '',
      nextId: ''
    },
    ui: {
      isShow: false // 是否展示上下标题栏
    }
  }
}

export default function (state = initState(), action) {
  switch(action.type) {
    case INIT_READ_STATE:
      return initState() 
    case FETCH_READ_START:
      return { ...state, data: { ...state.data, ...action.value } }
    case FETCH_READ_END:
      return { ...state, data: { ...state.data, ...action.value } }
    case TOGGLE_READ_NAV_SHOW:
      return { ...state, ui: { ...state.ui, isShow: !state.ui.isShow } }
      default:
      return state
  }
}

export const initReadState = makeActionCreator(INIT_READ_STATE)
export const fetchReadStart = makeActionCreator(FETCH_READ_START, 'value')
export const fetchReadEnd = makeActionCreator(FETCH_READ_END, 'value')
export const toggleReadNavShow = makeActionCreator(TOGGLE_READ_NAV_SHOW)
