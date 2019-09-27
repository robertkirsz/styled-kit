import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from 'styles'

import Div from 'components/Div'
import MediaQueriesProvider from 'providers/MediaQueriesProvider'

import DivPlayground from 'examples/DivPlayground'
import GridExample from 'examples/GridExample'
import HeightTransitionExample from 'examples/HeightTransitionExample'
import SliderExample from 'examples/SliderExample'

const queries = [{ name: 'mediumUp', value: '(min-width: 640px)' }, { name: 'largeUp', value: '(min-width: 1024px)' }]

export const styledKitMediaQueries = {
  small: '(max-width: 320px)',
  medium: '(min-width: 321px) and (max-width: 768px)',
  large: '(min-width: 769px)'
}

export default function App() {
  return (
    <>
      <ThemeProvider theme={{ styledKitMediaQueries }}>
        <Div column listTop={16}>
          <DivPlayground />

          <MediaQueriesProvider queries={queries}>
            <GridExample />
          </MediaQueriesProvider>

          <HeightTransitionExample />
          <SliderExample />
        </Div>
      </ThemeProvider>

      <GlobalStyles />
    </>
  )
}
