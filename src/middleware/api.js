var fetch = require('node-fetch');
const serverUrl = 'http://localhost:3001'
const API_ID = "test_api"
const header = { headers: { 'Authorization': API_ID }}

export const getAllPosts = () =>
         fetch(`${serverUrl}/posts`, header).
         then(function(res) {
           var retVal = res.json();
           console.log(retVal);
           return retVal;
         })

export const getPostById = (id) =>
  fetch(`${serverUrl}/posts/${id}`, header).
         then(res => res.json())

export const getAllCategories = () =>
         fetch(`${serverUrl}/categories`, header).
         then(res => res.json())

export const deletePost = (id) => {
  var myHeaders = new Headers();
  myHeaders = {
    "Authorization": API_ID,
    "Content-Type": "application/json"
  }

  return fetch(`${serverUrl}/posts/${id}`, {
        headers: myHeaders,
        method: 'DELETE',
        }).then(function(res) {
          return res.json();
        });
}

export const createPost = (id, timestamp, postBody) => {
  const title = postBody["title"];
  const postbody = postBody["body"];
  const author = postBody["author"];
  const category = postBody["category"];
  var tempBody = JSON.stringify({ id, timestamp, title, postbody, author, category });

  var myHeaders = new Headers();
  myHeaders = {
    "Authorization": API_ID,
    "Content-Type": "application/json"
  }

  return fetch(`${serverUrl}/posts`, {
        headers: myHeaders,
        method: 'POST',
        body: tempBody
        }).then(function(res) {
          return res.json();
        });
}
