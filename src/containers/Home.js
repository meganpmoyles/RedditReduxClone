import React from 'react'
import PropTypes from 'prop-types'
import * as API from '../middleware/api.js'
import VisiblePostList from './VisiblePostList.js'
import AddPost from './AddPost.js'
const Home = () => (
  <ul>
    <AddPost/>
    <VisiblePostList/>
  </ul>
)

export default Home
