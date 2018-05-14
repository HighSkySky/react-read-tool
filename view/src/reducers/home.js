import { makeActionCreator } from './util'

export const OPEN_BOOK_MANAGE = 'OPEN_BOOK_MANAGE'
export const CLOSE_BOOK_MANAGE = 'CLOSE_BOOK_MANAGE'
export const INIT_SELECT_INDEX_LIST = 'INIT_SELECT_INDEX_LIST'
export const ADD_SELECT_INDEX_LIST = 'ADD_SELECT_INDEX_LIST'
export const ADD_ALL_SELECT_INDEX_LIST = 'ADD_ALL_SELECT_INDEX_LIST'
export const DELETE_SELECT_INDEX_LIST = 'DELETE_SELECT_INDEX_LIST'
export const DELETE_ALL_SELECT_INDEX_LIST = 'DELETE_ALL_SELECT_INDEX_LIST'
export const CHANGE_TOP_NUM = 'CHANGE_TOP_NUM'

const initialState = {
  isManage: false,
  selectIndexList: [],
  topNum: 0
}

export default function (state = initialState, action) {
  switch(action.type) {
    case OPEN_BOOK_MANAGE:
      return { ...state, isManage: true }
    case CLOSE_BOOK_MANAGE:
      return { ...state, isManage: false }
    case INIT_SELECT_INDEX_LIST:
      return { ...state, selectIndexList: action.list }
    case ADD_SELECT_INDEX_LIST:
      return { ...state, selectIndexList: [
        ...state.selectIndexList.slice(0, action.index),
        true,
        ...state.selectIndexList.slice(action.index + 1)
      ] }
    case ADD_ALL_SELECT_INDEX_LIST:
      return { ...state, selectIndexList: [...state.selectIndexList.fill(true)] }
    case DELETE_SELECT_INDEX_LIST:
      return { ...state, selectIndexList: [
        ...state.selectIndexList.slice(0, action.index),
        false,
        ...state.selectIndexList.slice(action.index + 1)
      ] }
    case DELETE_ALL_SELECT_INDEX_LIST:
      return { ...state, selectIndexList: [...state.selectIndexList.fill(false)] }
    case CHANGE_TOP_NUM:
      return { ...state, topNum: Number(action.num) }
    default:
      return state
  }
}

export const openBookManage = makeActionCreator(OPEN_BOOK_MANAGE)
export const closeBookManage = makeActionCreator(CLOSE_BOOK_MANAGE)
export const initSelectIndexList = makeActionCreator(INIT_SELECT_INDEX_LIST, 'list')
export const addSelectIndexList = makeActionCreator(ADD_SELECT_INDEX_LIST, 'index')
export const addAllSelectIndexList = makeActionCreator(ADD_ALL_SELECT_INDEX_LIST)
export const deleteSelectIndexList = makeActionCreator(DELETE_SELECT_INDEX_LIST, 'index')
export const deleteAllSeleatIndexList = makeActionCreator(DELETE_ALL_SELECT_INDEX_LIST)
export const changeTopNum = makeActionCreator(CHANGE_TOP_NUM, 'num')