import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'styles'

import Div from 'components/Div'
import { createQueries } from 'utils'

import DivExample from 'examples/DivExample'
// import HeightTransitionExample from 'examples/HeightTransitionExample'
// import GridExample from 'examples/GridExample'

export const styledKitMediaQueries = createQueries({
  small: '(max-width: 639px)',
  medium: '(min-width: 640px)',
  large: '(min-width: 1024px)'
})

export default () => (
  <>
    <GlobalStyles />

    <ThemeProvider theme={{ styledKitMediaQueries }}>
      <Div column listTop={24}>
        <Div column>
          <code css="font-size: 40px; margin: 8px;">Div</code>
          <DivExample />
        </Div>

        {/* <Div column>
          <code css="font-size: 40px; margin: 8px;">HeightTransition</code>
          <HeightTransitionExample />
        </Div> */}

        {/* <Div column>
          <code css="font-size: 40px; margin: 8px;">Grid</code>
          <GridExample />
        </Div> */}
      </Div>
    </ThemeProvider>
  </>
)

/*
TODO: bring these back someday...
<SliderExample />
*/
