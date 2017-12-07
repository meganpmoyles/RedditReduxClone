import React, { Component} from 'react'
import { Provider } from 'react-redux'
import Home from './Home'

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}
