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
        console.log("state before " + state);
        var newState = state.slice();
        console.log("state after " + newState);
        if (index != -1){
          newState.splice(index, 1);
        }
        console.log("state after again" + newState);
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
