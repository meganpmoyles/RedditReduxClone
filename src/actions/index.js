import * as Api from '../middleware/api.js'

export const fetchPosts = (filter) => (dispatch) => {
  console.log("fetchPosts");
  return Api.getAllPosts().then(function(result) {
          response => dispatch({
            type: 'FETCH_POSTS_SUCCESS',
            filter,
            response
          });
  });
};
