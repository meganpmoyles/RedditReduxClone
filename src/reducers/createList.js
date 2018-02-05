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
      case 'REMOVE_POSTS':
        var index = state.indexOf(action.result.id);
        var newState = state.slice();
        if (index != -1){
          newState.splice(index, 1);
        }
        return newState;
        break;
      case 'FETCH_POSTS_SUCCESS':
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
