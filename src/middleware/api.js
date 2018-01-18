var fetch = require('node-fetch');
const serverUrl = 'http://localhost:3001'
const API_ID = "test_api"
const header = { headers: { 'Authorization': API_ID }}

export const getAllPosts = () =>
         fetch(`${serverUrl}/posts`, header).
         then(function(res) {
           var retVal = res.json();
           return retVal;
         })

export const getPostById = (id) =>
  fetch(`${serverUrl}/posts/${id}`, header).
         then(res => res.json())

export const getAllCategories = () =>
         fetch(`${serverUrl}/categories`, header).
         then(res => res.json())

export const createPost = (id, timestamp, title, body, author, category) => {
  var boder = JSON.stringify({ id, timestamp, title, body, author, category });

  var myHeaders = new Headers();
  myHeaders = {
    "Authorization": API_ID,
    "Content-Type": "application/json"
  }

  fetch(`${serverUrl}/posts`, {
        headers: myHeaders,
        method: 'POST',
        body: boder
        }).then(function(res) {
          return res.json();
        })
}
