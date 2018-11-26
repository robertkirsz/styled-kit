import React from 'react'
import { createGlobalStyle } from 'styled-components'

import Div from './components/Div'
import MediaQueriesProvider from './providers/MediaQueriesProvider'

import DivExample from './examples/DivExample'
import GridExample from './examples/GridExample'
import HeightTransitionExample from './examples/HeightTransitionExample'
import SliderExample from './examples/SliderExample'

const queries = [{ name: 'mediumUp', value: '(min-width: 640px)' }, { name: 'largeUp', value: '(min-width: 1024px)' }]

const App = () => (
  <>
    <Div column listTop={16}>
      <MediaQueriesProvider queries={queries}>
        <GridExample />
      </MediaQueriesProvider>

      <DivExample />

      <HeightTransitionExample />

      <SliderExample />
    </Div>

    <GlobalStyles />
  </>
)

export default App

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font: 16px sans-serif;
  }
`
