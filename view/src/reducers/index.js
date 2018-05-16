import { combineReducers } from 'redux'

import statusReducers from './status'
import userReducers from './user'
import homeReducers from './home'
import bookReducers from './book'
import searchReducers from './search'
import readReducers from './read'

export default combineReducers({
  status: statusReducers,
  user: userReducers,
  home: homeReducers,
  book: bookReducers,
  search: searchReducers,
  read: readReducers
})

