import React from 'react'
import PropTypes from 'prop-types'

const Post = ({id, title}) => (
   <div id="wrapper">
      <div id="left" key={id}>
        {title}
      </div>
      <div id="right"> X </div>
   </div>
);

export default Post
