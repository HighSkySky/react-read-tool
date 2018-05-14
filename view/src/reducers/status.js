import { makeActionCreator } from './util'

export const CHANGE_STATUS_TO_NORMAL = 'CHANGE_STATUS_NORMAL'
export const CHANGE_STATUS_TO_LOADING = 'CHANGE_STATUS_TO_LOADING'
export const CHANGE_STATUS_TO_ERROR = 'CHANGE_STATUS_TO_ERROR'

export default function (state = 'normal', action) {
  switch(action.type) {
    case CHANGE_STATUS_TO_NORMAL: 
      return 'normal' 
    case CHANGE_STATUS_TO_LOADING:
      return 'loading' 
    case CHANGE_STATUS_TO_ERROR:
      return 'error' 
    default: 
      return state
  }
}


export const changeStatusToNormal = makeActionCreator(CHANGE_STATUS_TO_NORMAL)
export const changeStatusToLoading = makeActionCreator(CHANGE_STATUS_TO_LOADING)
export const changeStatusToError = makeActionCreator(CHANGE_STATUS_TO_ERROR)