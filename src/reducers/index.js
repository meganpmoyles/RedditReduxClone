import { combineReducers } from 'redux'
import postsById, * as fromById from './byId.js'
import createPostList, * as fromList from './createList.js'

const listByFilter = combineReducers({
  all: createPostList('all')
})

const rootReducer = combineReducers({
  postsById,
  listByFilter
})

export const getVisiblePosts = (state, filter) => {
        var filteredListSlice = listByFilter[filter];
        var postIds = fromList.getPostIds(filteredListSlice);

        console.log(postIds);
        var collectedPosts = postIds.map(id => {
          fromById.getPostById(state.postsById, id)
        });
        return collectedPosts;
}

export default rootReducer
