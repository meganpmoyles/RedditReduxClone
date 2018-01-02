import React, { Component} from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import PostList from '../components/PostList.js'
import { getVisiblePosts } from '../reducers/index.js'

class VisiblePostList extends Component {
        componentDidMount(){
          fetchPosts("all");
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

const mapDispatchToProps = dispatch => {
  return {
    onClick: null
  }
};

VisiblePostList = connect(mapStateToProps, mapDispatchToProps)(PostList);
export default VisiblePostList;
