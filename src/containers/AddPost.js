import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost }  from '../actions/index.js'

class AddPost extends Component {
        constructor(){
          super();
          this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleSubmit(event) {
          event.preventDefault();
          const data = new FormData(event.target);
          this.props.addPost(data, "all");
        }

        render() {
          return (
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="title">Title</label>
              <input id="title" name="title" type="text" />
              <label htmlFor="body">Post</label>
              <input id="body" name="body" type="text" />
              <label htmlFor="author">Author</label>
              <input id="author" name="author" type="text" />
              <label htmlFor="category">Category</label>
              <input id="category" name="category" type="text" />
              <button type="submit">Add Post</button>
            </form>
          );
        }
};

export default connect(null, {addPost})(AddPost);
