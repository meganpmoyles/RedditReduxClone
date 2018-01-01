import React from 'react'
import PropTypes from 'prop-types'
import * as API from '../middleware/api.js'

API.getAllPosts().then(function(result) {
  console.log(result);
});

const Home = () => (
  <ul>
    <li>
      Home
    </li>
  </ul>
)

export default Home
