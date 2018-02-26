import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux'
import React, { Component} from 'react'
import Category from '../containers/Category.js'

class Linker extends Component {
  render() {
   const { links } = this.props;
   return (
     <div>
     Categories
     {(links == null || links.length == 0) ? "No Links" : links.map((item, index) => (
        <ul>
         <Link to={"/category/"+item}>{item}</Link>
        </ul>
       ))}
      <Route path="/category/:id" component={Category} />
     </div>
   )
  }
}
       /*{
       */

export default Linker;
