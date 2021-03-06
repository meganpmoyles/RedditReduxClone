import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { removePost } from '../actions/index.js'
import Voter from './Voter.js'

class Post extends Component {

  eventHandler(event) {
    event.preventDefault();
    this.props.removePost(this.props.id);
  }

  render() {
   const { id, title, voteScore } = this.props;
   return (
           <div id="wrapper">
              <div id="left" key={id}>
                <li>{title}</li>
                <Voter id={id} voteScore={voteScore} />
              </div>
              <div id="right">
                <button onClick={(e) => this.eventHandler(e)}>X</button>
              </div>
           </div>
   );
  }
}

export default connect(null, {removePost})(Post);
