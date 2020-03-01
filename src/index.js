import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'styles'
import { createQueries } from 'components/Div'
import DivExample from 'examples/DivExample'

export const styledKitMediaQueries = createQueries({
  small: '(max-width: 639px)',
  medium: '(min-width: 640px)',
  large: '(min-width: 1024px)'
})

function App() {
  return (
    <>
      <GlobalStyles />

      <ThemeProvider theme={{ styledKitMediaQueries }}>
        <DivExample />
      </ThemeProvider>
    </>
  )
}

render(<App />, document.getElementById('root'))
