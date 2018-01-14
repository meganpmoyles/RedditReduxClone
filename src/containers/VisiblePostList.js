import React, { Component} from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import PostList from '../components/PostList.js'
import { getVisiblePosts } from '../reducers/index.js'
import {createPost}  from '../middleware/api.js'
const uuid = require('uuid')

class VisiblePostList extends Component {
        componentDidMount(){
          const { fetchPosts, addPost } = this.props;
          var val = uuid();
          var time = Date.now();

          console.log(time);
          console.log(val);

          createPost(val, Date.now(), "boi", "There's levels to this s***", "Meek Mill", "redux");
        }

        render() {
          const { posts } = this.props;
          return (
            <div>
              <PostList
                  posts={posts}
              />
            </div>
          );
        }
}

const mapStateToProps = state => {
  return {
    posts: getVisiblePosts(state, "all")
  }
};

VisiblePostList = connect(mapStateToProps, actions)(VisiblePostList);
export default VisiblePostList;
