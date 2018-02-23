import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux'
import React, { Component} from 'react'
import Category from '../containers/Category.js'

class Linker extends Component {
  render() {
   const { links } = this.props;
   return (
     <div>
       {links.map((item, index) => (
         <Link to="/category/{item}">item</Link>
       ))}
      <Route path="/category/:id" component={Category} />
     </div>
   )
  }
}

export default Linker;
