import React from 'react'
import { GlobalStyles } from 'styles'

import Div from 'components/Div'

import HeightTransitionExample from 'examples/HeightTransitionExample'
import DivPlayground from 'examples/DivPlayground'
import MediaQueriesProvider from 'providers/MediaQueriesProvider'

export default () => (
  <>
    <GlobalStyles />

    <Div column listTop={24}>
      <Div column>
        <code css="font-size: 40px; margin: 8px;">{'<Div />'}</code>
        <MediaQueriesProvider
          queries={[
            { name: 'mediumUp', value: '(min-width: 640px)' },
            { name: 'largeUp', value: '(min-width: 1024px)' }
          ]}
          theme={{
            styledKitMediaQueries: {
              small: '(max-width: 1023px)',
              medium: '(min-width: 640px)',
              large: '(min-width: 1024px)'
            }
          }}
        >
          <DivPlayground />
        </MediaQueriesProvider>
      </Div>

      <Div column>
        <code css="font-size: 40px; margin: 8px;">{'<HeightTransition />'}</code>
        <HeightTransitionExample />
      </Div>
    </Div>
  </>
)

/*
TODO: bring these back someday...

<MediaQueriesProvider
  queries={[
    { name: 'mediumUp', value: '(min-width: 640px)' },
    { name: 'largeUp', value: '(min-width: 1024px)' }
  ]}
>
  <GridExample />
</MediaQueriesProvider>

<HeightTransitionExample />

<SliderExample />
*/
