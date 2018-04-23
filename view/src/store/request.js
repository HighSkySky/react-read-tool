import { put } from 'redux-saga/effects'
import { changeStatusToError } from './reducers/status'

const request = function* (url, options) {
  return fetch(url, options)
  .then(response => {
    if (response.status !== 200) {
      throw new Error('Fail to get response with status: ' + response.status)
    }
    return response.json()
  })
  .catch((error) => {

  })
}

export default request

