import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Posts from '../components/Posts'

class Home extends Component {
  componentDidMount() {
    dispatch(fetchPostsIfNeeded());
  }

  render() {
    { posts, posts_requested, posts_errored } = this.props;
    return {
    <div>
        <Posts posts/>
    </div>
    }
  }

  function mapStateToProps = (state) => ({
    posts_errored: getPostsErrored(state),
    posts_requested: getPostsRequested(state),
    posts: state.posts
  })
}


export default connect(mapStateToProps)(App)
