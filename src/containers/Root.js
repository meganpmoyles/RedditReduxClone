import React, { Component} from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import { withRouter } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './Home'
import Category from './Category'
const store = configureStore()
export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
                  <Route exact path="/" component={Home} />
                  <Route path="/category/:id" component={Category} />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}
