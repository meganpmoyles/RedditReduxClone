import React, { Component} from 'react'
import PropTypes from 'prop-types'
import * as API from '../middleware/api.js'
import VisiblePostList from './VisiblePostList.js'
import AddPost from './AddPost.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Category from './Category'
import LinkList from './LinkList.js'

class Home extends Component {
        constructor(props) {
          super(props);
          this.state = { sortOrder: '' };
        }
        render() {
          return (
                  <ul>
                    <LinkList/>
                    <div>
                      <select value={this.props.sortOrder}
                              onChange={(e) => this.selectEventHandler(e)} >
                        <option value="">-</option>
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                      </select>
                    </div>
                    <VisiblePostList sortOrder={this.state.sortOrder}/>
                  </ul>
          )
        }

        selectEventHandler = (e) => {
          this.setState({ sortOrder: e.target.value });
        }
}
export default Home
