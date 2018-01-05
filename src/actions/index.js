import * as Api from '../middleware/api.js'

export const fetchPosts = (filter) => (dispatch) => {
  console.log("fetch posts action invoked");
  return Api.getAllPosts().then(function(result) {
          console.log("action received");
          console.log(result);
          dispatch({
            type: 'FETCH_POSTS_SUCCESS',
            filter,
            result
          });
  });
};
