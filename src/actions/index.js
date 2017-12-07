import fetch from 'cross-fetch'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVED_POSTS = 'RECEIVE_POSTS'

function requestPosts() {
  return {
    type: REQUEST_POSTS,
  }
}

function receivePosts(status) {
  return {
    type: RECEIVE_POSTS,
    status: status
  }
}

function receiveError() {
  return {
    type: RECEIVE_ERROR,
  }
}

function fetchLoadItems(items){
  return {
    type: LOAD_POSTS,
    posts: items
  }
}

export function itemFetchData(url) {
  return (dispatch) => {
    dispatch(requestPosts())
    fetch(`https://localhost:3000/posts?q=app_key=${APP_KEY}}`).
        then((response) => {
          if(response.ok){
            dispatch(receivePosts())
          }
          else{
            dispatch(receiveError())
          }
        }).
        then((response) => response.json).
        then((items) => dispatch(fetchLoadItems(items)));
  }
}
