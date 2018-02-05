import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { votePost } from '../actions/index.js'

class Voter extends Component {
        constructor(){
          super();
          this.downvote= this.downvote.bind(this);
          this.upvote = this.upvote.bind(this);
        }

        downvote(){
                this.vote(id, "down");
        }

        upvote(){
                this.vote(id, "up");
        }

        render() {
          const { id, vote } = this.props;
          return (
            <div>
                <button onClick=>^</button>
                <div>{vote}</div>
                <button onClick=>V</button>
            </div>
          )
        };
};

export default connect(null, {votePost})(Post);

