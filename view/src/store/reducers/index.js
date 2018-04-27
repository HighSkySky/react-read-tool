import { combineReducers } from 'redux'

import search from './search'
import book from './book'
import status from './status'

const reducers =  combineReducers({
  search,
  book,
  status
})

export default reducers
