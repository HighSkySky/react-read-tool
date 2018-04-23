import { combineReducers } from 'redux'

import search from './search'
import status from './status'

const reducers =  combineReducers({
  search,
  status
})

export default reducers
