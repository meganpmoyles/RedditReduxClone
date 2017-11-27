import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Root from './containers/Root';
import { render } from 'react-dom'
import configureStore from './store/configureStore'

const store = configureStore()

render(
  <Router>
    <Root store={store} />
  </Router>,
  document.getElementById('root')
)
