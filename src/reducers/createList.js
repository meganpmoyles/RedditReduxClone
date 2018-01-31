import { combineReducers } from 'redux'

const createPostList = (filter) => {
  const ids = (state=[], action) => {
    switch(action.type) {
      case 'ADD_POSTS':
          let newState = [
             ...state,
             action.result.id
          ]
          return newState;
        break;
      case 'FETCH_POSTS_SUCCESS':
        //fix filtering
          var newState = action.result.map(post => post.id);
          return newState;
      break;
      default:
        return state;
    }
  }
  return combineReducers({
    ids
  })
}

export const getPostIds = (state) => state.ids;
export default createPostList;
