// action type
export const CHANGE_STATUS_TO_NORMAL = 'CHANGE_STATUS_NORMAL'
export const CHANGE_STATUS_TO_LOADING = 'CHANGE_STATUS_TO_LOADING'
export const CHANGE_STATUS_TO_ERROR = 'CHANGE_STATUS_TO_ERROR'

const initialState = {
  status: 'normal'
}

// reducer
export default function (state = initialState, action) {
  switch(action.type) {
    case CHANGE_STATUS_TO_NORMAL: 
      return { ...state, status: 'normal' }
    case CHANGE_STATUS_TO_LOADING:
      return { ...state, status: 'loading' }
    case CHANGE_STATUS_TO_ERROR:
      return { ...state, status: 'error' }
    default: 
      return state
  }
}

// create action
export const changeStatusToNormal = () => {
  return { type: CHANGE_STATUS_TO_NORMAL }
}

export const changeStatusToLoading= () => {
  return { type: CHANGE_STATUS_TO_LOADING }
}

export const changeStatusToError = () => {
  return { type: CHANGE_STATUS_TO_ERROR }
}
