import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
class AddPost extends Component {
        constructor(props) {
          super(props);
          this.handleSubmit = this.handleSubmit.bind(
            this
          );
        }

        handleSubmit(event) {
          event.preventDefault();
          createPost(val, Date.now(), "boi", "There's levels to this s***", "Meek Mill", "redux");
        }

        render() {
          return (
            <form
              onSubmit={this.handleSubmit}>
              <button type="submit">
                Add Post
              </button>
            </form>
          );
        }
}

AddPost = connect(actions)(AddPost);
export default addPost;
