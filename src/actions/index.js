import fetch from 'cross-fetch'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVED_POSTS = 'RECEIVE_POSTS'

function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
  }
}

function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
  }
}
