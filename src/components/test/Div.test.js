import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'

import Div, { stuff } from '../Div'

describe('<Div />', () => {
  const handleDone = jest.fn()

  it('Matches snapshot', () => {
    const props = Object.keys(stuff).reduce((result, prop) => {
      if (!stuff[prop]) return result
      try {
        return { ...result, [prop]: stuff[prop](1) }
      } catch {
        return { ...result, [prop]: stuff[prop] }
      }
    }, {})

    render(
      <ThemeProvider theme={{}}>
        <Div data-testid="test" {...props} onDone={handleDone} />
      </ThemeProvider>
    )
    console.log(handleDone.mock.calls[0][0].replace(/;/g, ';\n'))
    expect(handleDone.mock.calls[0][0]).toMatchSnapshot()
  })
})
