import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'

import Div from '../Div'
import stuff from '../../stuff'

const props = Object.keys(stuff).reduce((result, prop) => {
  if (!stuff[prop]) return result
  return { ...result, [prop]: typeof stuff[prop] === 'function' ? 1 : true }
}, {})

describe('<Div />', () => {
  it('Matches snapshot', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={{}}>
        <Div data-testid="test" {...props} />
      </ThemeProvider>
    )

    expect(getByTestId('test')).toMatchSnapshot()
  })
})
