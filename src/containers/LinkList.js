import React, { Component} from 'react'
import * as actions from '../actions'
import PropTypes from 'prop-types'
import * as API from '../middleware/api.js'
import { getCurrentCategories } from '../reducers/categories.js'
import { connect } from 'react-redux'
import Linker from '../components/Linker.js'
import {BrowserRouter as Router, Route, Link } from "react-router-dom";

class LinkList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    const { fetchCategory } = this.props;
    fetchCategory();
  }

  render() {
    const { categories } = this.props;
    return (
      <Linker links={categories}/>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: getCurrentCategories(state)
  }
};

LinkList = connect(mapStateToProps, actions)(LinkList);
export default LinkList;
