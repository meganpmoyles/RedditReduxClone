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
          const data = this.state;
          this.props.addPost(data, "all");
        }

        handleChange = (e) => {
          this.setState({[e.target.name]: e.target.value});
        }

        render() {
          return (
            <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
              <label htmlFor="title">Title</label>
              <input id="title" name="title" type="text"  onChange={this.handleChange} />
              <label htmlFor="body">Post</label>
              <input id="body" name="body" type="text"  onChange={this.handleChange} />
              <label htmlFor="author">Author</label>
              <input id="author" name="author" type="text" onChange={this.handleChange}  />
              <label htmlFor="category">Category</label>
              <input id="category" name="category" type="text"  onChange={this.handleChange} />
              <button type="submit">Add Post</button>
            </form>
          );
        }
};

export default connect(null, {addPost})(AddPost);
