import { combineReducers } from 'redux'

const createPostList = (filter) => {
  const ids = (state=[], action) => {
    switch(action.type){
      case 'ADD_POSTS_SUCCESS':
        if(filter == action.filter) {
          //Fetch existing id
          let newState = state;
          state.concat(action.result.id);
          //Get new state
        }
        return state;
        break;
      case 'FETCH_POSTS_SUCCESS':
        if(filter == action.filter) {
          var newState = action.result.map(post => post.id);
          return newState;
        }
        return state;
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
