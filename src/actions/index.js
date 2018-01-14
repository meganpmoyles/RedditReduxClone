import * as Api from '../middleware/api.js'
const uuid = require('uuid')

export const fetchPosts = (filter) => (dispatch) => {
  return Api.getAllPosts().then(function(result) {
          dispatch({
            type: 'FETCH_POSTS_SUCCESS',
            filter,
            result
          });
  });
};

export const addPost = (post) => (dispatch) => {
  return;
  /*return Api.createPost(id, timestamp, title, body, author, category).then(function(result) {
          dispatch({
            type: 'ADD_POST',
            filter,
            result
          });
  });
  */
};

