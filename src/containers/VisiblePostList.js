import React, { Component} from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import PostList from '../components/PostList.js'
import { getVisiblePosts } from '../reducers/index.js'

class VisiblePostList extends Component {
        componentDidMount(){
          console.log("componentDidMount");
          console.log(fetchPosts);
          console.log(typeof(fetchPosts));
          const { fetchPosts } = this.props;
          var retVal = fetchPosts("all");
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
