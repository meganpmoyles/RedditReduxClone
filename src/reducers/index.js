import { combineReducers } from 'redux'
import  { postsById, getPostById } from './byId.js'
import createPostList, * as fromList from './createList.js'

const listByFilter = combineReducers({
  all: createPostList('all')
})

const rootReducer = combineReducers({
  postsById,
  listByFilter
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
  if(b.voteScore <  a.voteScore){
    return -1;
  }
  if(b.voteScore > a.voteScore) {
    return 1;
  }
  return 0;
}

export const getVisiblePosts = (state, filter) => {
        let filteredListSlice = state.listByFilter[filter];
        let postIds = fromList.getPostIds(filteredListSlice);

        let collectedPosts = [];
        if(postIds.length>0){
          collectedPosts = postIds.map(id => {
            return getPostById(state.postsById, id);
          });
        }

        collectedPosts.sort(ascendCompare);
        return collectedPosts;
}

export default rootReducer
