import { combineReducers } from 'redux'
import  { postsById, getPostById } from './byId.js'
import createPostList, * as fromList from './createList.js'

// Get categories first
// Use those to create filtered lists
const listByFilter = combineReducers({
  all: createPostList('all')
})

const rootReducer = combineReducers({
  postsById,
  listByFilter
})

export const getVisiblePosts = (state, filter) => {
        let filteredListSlice = state.listByFilter[filter];
        let postIds = fromList.getPostIds(filteredListSlice);

        let collectedPosts = [];
        if(postIds.length>0){
          collectedPosts = postIds.map(id => {
            return getPostById(state.postsById, id);
          });
        }
        return collectedPosts;
}

export default rootReducer
