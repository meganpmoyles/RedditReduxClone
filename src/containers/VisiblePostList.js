import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import PostList from '../components/PostList.js'
import AddPost from '../containers/AddPost.js'
import { getVisiblePosts } from '../reducers/index.js'
import {createPost}  from '../middleware/api.js'

class VisiblePostList extends Component {
        componentDidMount(){
          const { fetchPosts, addPost, votePost, filter, sortOrder } = this.props;
          fetchPosts(filter);
        }

        render() {
          const { posts } = this.props;
          return (
            <div>
              <h1>
              {this.props.sortOrder}
              </h1>
              <h1>
              {this.props.filter}
              </h1>
              <AddPost filter={this.props.filter}/>
              <PostList
                  posts={posts}
              />
            </div>
          );
        }
}

const mapStateToProps = (state, props) => {
  return {
    posts: getVisiblePosts(state, "all", props.sortOrder)
  }
};

VisiblePostList = connect(mapStateToProps, actions)(VisiblePostList);
export default VisiblePostList;
