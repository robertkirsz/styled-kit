import React, { Component, Fragment } from 'react'
import { hot } from 'react-hot-loader'
import { injectGlobal } from 'styled-components'

import Div from './components/Div'
import ScreenSizeProvider from './providers/ScreenSizeProvider'

import DivExample from './examples/DivExample'
import GridExample from './examples/GridExample'
import HeightTransitionExample from './examples/HeightTransitionExample'

class App extends Component {
  state = {}

  render() {
    return (
      <Fragment>
        <Div column listTop={16}>
          <ScreenSizeProvider>
            <GridExample />
          </ScreenSizeProvider>

          <DivExample />

          <HeightTransitionExample />
        </Div>
      </Fragment>
    )
  }
}

export default hot(module)(App)

// prettier-ignore
injectGlobal`
  body {
    margin: 0;
    font: 16px sans-serif;
  }
`
