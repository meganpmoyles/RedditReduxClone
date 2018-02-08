import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { votePost } from '../actions/index.js'

class Voter extends React.Component {
        constructor(){
          super();
          this.downvote= this.downvote.bind(this);
          this.upvote = this.upvote.bind(this);
        }

        downvote(e){
                this.props.votePost(this.props.id, "downVote");
        }

        upvote(e){
                this.props.votePost(this.props.id, "upVote");
        }

        render() {
          const { id, voteScore } = this.props;
          return (
            <div>
                <button onClick={this.upvote}>UpVote</button>
                <div>{voteScore}</div>
                <button onClick={this.downvote}>DownVote</button>
            </div>
          )
        };
};

export default connect(null, {votePost})(Voter);

