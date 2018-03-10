import { combineReducers } from 'redux'
import  { postsById, getPostById } from './byId.js'
import categories from './categories.js'
import createPostList, * as fromList from './createList.js'

const listByFilter = combineReducers({
  all: createPostList('all')
})

const rootReducer = combineReducers({
  postsById,
  listByFilter,
  categories
})

let ascendCompare = (a,b) => {
  if(a.voteScore <  b.voteScore){
    return -1;
  }
  if(a.voteScore > b.voteScore) {
    return 1;
  }
  return 0;
}

let descendCompare = (a,b) => {
  if(a.voteScore <  b.voteScore){
    return 1;
  }
  if(a.voteScore > b.voteScore) {
    return -1;
  }
  return 0;
}

export const getVisiblePosts = (state, filter, sortOrder) => {
        let filteredListSlice = state.listByFilter[filter];
        let postIds = fromList.getPostIds(filteredListSlice);

        let collectedPosts = [];
        if(postIds.length>0){
          collectedPosts = postIds.map(id => {
            return getPostById(state.postsById, id);
          });
        }

        switch(sortOrder){
          case "ascending":
            collectedPosts = collectedPosts.sort(ascendCompare);
            break;
          case "descending":
            collectedPosts = collectedPosts.sort(descendCompare);
            break;
          default:
            collectedPosts = collectedPosts.sort(ascendCompare);
        }
        return collectedPosts;
}


export default rootReducer
