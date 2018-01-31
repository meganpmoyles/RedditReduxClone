import React from 'react'
import PropTypes from 'prop-types'

const Post = ({id, title}) => (
   <div key={id}>
     {title}
   </div>
);

export default Post
