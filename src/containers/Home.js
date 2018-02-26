import React from 'react'
import PropTypes from 'prop-types'
import * as API from '../middleware/api.js'
import VisiblePostList from './VisiblePostList.js'
import AddPost from './AddPost.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Category from './Category'
import LinkList from './LinkList.js'

const Home = () => (
  <ul>
    <LinkList/>
    <VisiblePostList/>
  </ul>
)

export default Home
