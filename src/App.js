import React, { Component, Fragment } from 'react'
import { hot } from 'react-hot-loader'

import GridHelper from './helpers/GridHelper'

import Div from './components/Div'
import DivExample from './examples/DivExample'
import GridExample from './examples/GridExample'
import HeightTransitionExample from './examples/HeightTransitionExample'

class App extends Component {
  state = {}

  render() {
    return (
      <Fragment>
        <GridHelper />
        <Div column listTop={16}>
          <GridExample />
          <DivExample />
          <HeightTransitionExample />
        </Div>
      </Fragment>
    )
  }
}

export default hot(module)(App)
