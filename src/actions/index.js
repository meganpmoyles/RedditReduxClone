import * as Api from '../middleware/api.js'
const uuid = require('uuid')

export const fetchPosts = (filter) => (dispatch) => {
  if(filter == "all"){
    return Api.getAllPosts(filter).then(function(result) {
          dispatch({
            type: 'FETCH_POSTS_SUCCESS',
            filter,
            result
          });
    });
  }
  return Api.getCategoryPosts(filter).then(function(result) {
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
            type: 'ADD_POSTS',
            filter,
            result
          });
  });
};

export const votePost = (id, voteStr) => (dispatch) => {
  return Api.vote(id, voteStr).then(function(result) {
          dispatch({
            type: 'CHANGE_POST_CONTENT',
            result
          });
  });
};
export const removePost = (id) => (dispatch) => {
  return Api.deletePost(id).then(function(result) {
          dispatch({
            type: 'REMOVE_POSTS',
            result
          });
  });
};

export const fetchCategory = () = (dispatch) => {
  return Api.getAllCategories().then(function(result) {
          dispatch({
            type: 'FETCH_CATEGORIES',
            result
          });
  });
};
