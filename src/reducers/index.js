import { combineReducers } from 'redux'

const posts = ( state = {
  didInvalidate: false,
  items: []
}, action) => {
  return state;
}

const rootReducer = combineReducers({
  posts
})

export default rootReducer
