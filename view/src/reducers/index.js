import { combineReducers } from 'redux'

import statusReducers from './status'
import userReducers from './user'
import homeReducers from './home'
import bookReducers from './book'

export default combineReducers({
  status: statusReducers,
  user: userReducers,
  home: homeReducers,
  book: bookReducers
})

