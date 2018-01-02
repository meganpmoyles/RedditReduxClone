import React from 'react'
import PropTypes from 'prop-types'
import * as API from '../middleware/api.js'
import VisiblePostList from './VisiblePosts.js'
const Home = () => (
  <ul>
    "Post List"
    <VisiblePostList/>
  </ul>
)

export default Home
