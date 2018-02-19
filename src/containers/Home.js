import React from 'react'
import PropTypes from 'prop-types'
import * as API from '../middleware/api.js'
import VisiblePostList from './VisiblePostList.js'
import AddPost from './AddPost.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Category from './Category'

const Home = () => (
  <ul>
    <VisiblePostList filter="all"/>
    <Link to="/category/dashboard">Dashboard</Link>
    <Route path="/category/:id" component={Category} />
  </ul>
)

export default Home
