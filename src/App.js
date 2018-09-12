import React, { Component, Fragment } from 'react'
import { hot } from 'react-hot-loader'
import { createGlobalStyle } from 'styled-components'

import Div from './components/Div'
import MediaQueriesProvider from './providers/MediaQueriesProvider'

import DivExample from './examples/DivExample'
import GridExample from './examples/GridExample'
import HeightTransitionExample from './examples/HeightTransitionExample'

const queries = [{ name: 'mediumUp', value: '(min-width: 640px)' }, { name: 'largeUp', value: '(min-width: 1024px)' }]

class App extends Component {
  state = {}

  render() {
    return (
      <Fragment>
        <Div column listTop={16}>
          <MediaQueriesProvider queries={queries}>
            <GridExample />
          </MediaQueriesProvider>

          <DivExample />

          <HeightTransitionExample />
        </Div>

        <GlobalStyles />
      </Fragment>
    )
  }
}

export default hot(module)(App)

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font: 16px sans-serif;
  }
`
