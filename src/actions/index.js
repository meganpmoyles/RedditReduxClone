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

export const addPost = (postBody, filter) => (dispatch) => {
  var id = uuid();
  var time = Date.now();

  return Api.createPost(id, time, postBody).then(function(result) {
          dispatch({
            type: 'ADD_POST',
            filter,
            result
          });
  });
};

