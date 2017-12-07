import { combineReducers } from 'redux'

const posts = (( state = {
  ['posts']: [],
  ['posts_state']: {
    ['posts_errored'] : false,
    ['posts_requested'] : false
  }
}, action) => {
  switch(action.type){
          case 'RECEIVE_ERROR':
            return {
              ...state,
              ['posts_state']: {
                  ['posts_errored'] : true
              },
              ['posts']: []
            }
          case 'REQUEST_POSTS':
            return {
              ...state,
              ['posts_state']: {
                  ['posts_requested'] : true,
                  ['posts_errored'] : false
              }
            }
          case 'RECEIVE_POSTS':
            return {
              ...state,
              ['posts_state']: {
                  ['posts_requested'] : false,
                  ['posts_errored']: false
              }
            }
          case 'LOAD_POSTS':
            return {
              ...state,
              ['posts']: action.posts
            }
          default:
            return state;
  }
});

export const getPostsRequested = state => state['posts_state']['posts-requested'];

export const getPostsErrored = state => state['posts_state']['posts-errored'];

const rootReducer = combineReducers({
  posts
})

export default rootReducer
