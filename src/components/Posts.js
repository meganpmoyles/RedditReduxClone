import React from 'react'
import PropTypes from 'prop-types'

const Post = ({id, title, onPostClick}) => (
   <div key={id} onClick={onPostClick}>
     {title}
   </div>
);

export default Post
