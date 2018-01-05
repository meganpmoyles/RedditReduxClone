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

export const createPost = (id, timestamp, title, body, author, category) =>
  fetch(`${serverUrl}/posts`, header, {
        method: 'PUT',
        body: JSON.stringify({ id, timestamp, title, body, author, category })
        }).then(res => res.json())

/*
 module.exports = {
  getPostById,
  getAllPosts,
  getAllCategories,
  createPost
}
createPost('34', Date.now(), "first_post", "value", "autore", "redux").then(
        function(response){
          console.log(response);
        }
);
*/

