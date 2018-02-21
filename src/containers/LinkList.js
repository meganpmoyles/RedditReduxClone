import React from 'react'
import * as actions from '../actions'
import PropTypes from 'prop-types'
import * as API from '../middleware/api.js'
import { getCurrentCategories } from '../reducers/index.js'
import * from '../components/Linker.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class LinkList extends Component {
  componentDidMount(){
    const { fetchCategories } = this.props;
    fetchCategories();
  }

  render() {
    return (
      <Linker links=this.props.categories/>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: getCategories(state)
  }
};

/*const LinkList= () => (
    <Link to="/category/dashboard">Dashboard</Link>
)*/

LinkList = connect(mapStateToProps, actions)(LinkList);
export default LinkList
