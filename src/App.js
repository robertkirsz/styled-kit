import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import DivExample from './examples/DivExample'

class App extends Component {
  state = {}

  render() {
    return (
      <DivExample />
    )
  }
}

export default hot(module)(App)
