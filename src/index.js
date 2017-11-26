import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

const middleware = [ thunk ]
middleware.push(createLogger())

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

render(
  <Provider store={store}>
    <App />
  </Provider>
  document.getElementById('root');
)
