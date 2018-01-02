import * as Api from '../middleware/api.js'

export const fetchPosts = (filter) => (dispatch) => {
  return Api.getAllPosts.then(function(result) {
          dispatch({
            type: 'FETCH_POSTS_REQUEST',
            filter,
          });
  });
};
