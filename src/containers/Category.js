import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost }  from '../actions/index.js'
import VisiblePostList from './VisiblePostList.js'

class Category extends Component {
        constructor(){
          super();
        }

        componentDidMount(){
          const { match } = this.props;
        }

        render() {
          const { match } = this.props;
          return (
            <div>
              <VisiblePostList filter={match.params.id} />
            </div>
          );
        }
}
export default Category
