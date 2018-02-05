import React from 'react'
import PropTypes from 'prop-types'
import Post from './Posts.js'

const PostList = ({posts, onPostClick}) => (
  <div>
    {
        posts.length==0 ? "No posts" : posts.map((post) =>
            <Post
                  id={post.id}
                  title={post.title}
                  voteScore={post.voteScore}
            />)
     }
  </div>
)

export default PostList

