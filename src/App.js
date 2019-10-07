import React from 'react'
import { GlobalStyles } from 'styles'
import DivPlayground from 'examples/DivPlayground'
import MediaQueriesProvider from 'providers/MediaQueriesProvider'

export default () => (
  <>
    <GlobalStyles />
    <>
      <code css="font-size: 40px; margin: 8px;">{'<Div />'}</code>
      <MediaQueriesProvider
        queries={[{ name: 'mediumUp', value: '(min-width: 640px)' }, { name: 'largeUp', value: '(min-width: 1024px)' }]}
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
    </>
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
