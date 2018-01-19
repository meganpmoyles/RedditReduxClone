import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
class AddPost extends Component {

        constructor(props) {
          super();
          this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleSubmit(event) {
          event.preventDefault();
          const data = new FormData(event.target);
          addPost(data);
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
}

AddPost = connect(actions)(AddPost);
export default addPost;
