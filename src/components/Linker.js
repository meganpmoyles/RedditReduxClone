import React from 'react'
import * as actions from '../actions'
import PropTypes from 'prop-types'
import * as API from '../middleware/api.js'
import { getCurrentCategories } from '../reducers/index.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Linker extends Component {
  render() {
   const { links } = this.props;
   return (
     <div>
       {links.map((item, index) => (
         <Link to="/category/dashboard">Dashboard</Link>
       ));}
      <Route path="/category/:id" component={Category} />
     </div>
   )
  }
}
Linker = connect(mapStateToProps, null)(LinkList);
export default Linker;



