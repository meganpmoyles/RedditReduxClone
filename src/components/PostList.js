import React from 'react'
import PropTypes from 'prop-types'
import Post from './Posts.js'

const PostList = ({posts, onPostClick}) => {
  <div>
    {
        posts.length()!==0 && posts.map((post) =>
            <Post id={post.id}
                  title={post.title}
                  onPostClick={() => this.changeVote(post.id)}
            />)
     }
  </div>
}

export default PostList

