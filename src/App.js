import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import Div from './components/Div'
import DivExample from './examples/DivExample'
import HeightTransitionExample from './examples/HeightTransitionExample'

class App extends Component {
  state = {}

  render() {
    return (
      <Div column listTop={16}>
        <DivExample />
        <HeightTransitionExample />
      </Div>
    )
  }
}

export default hot(module)(App)
