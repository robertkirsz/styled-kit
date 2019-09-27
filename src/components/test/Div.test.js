import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'

import Div from '../Div'
import stuff from '../../stuff'

const props = Object.keys(stuff).reduce((result, prop) => {
  if (!stuff[prop]) return result
  return { ...result, [prop]: typeof stuff[prop] === 'function' ? 1 : true }
}, {})

// TODO: duplicated
const styledKitMediaQueries = {
  small: '(max-width: 320px)',
  medium: '(min-width: 321px) and (max-width: 768px)',
  large: '(min-width: 769px)'
}

describe('<Div />', () => {
  it('Matches snapshot', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={{ styledKitMediaQueries }}>
        <Div data-testid="test" {...props} small={props} medium="color: green;" large="color: blue;" />
      </ThemeProvider>
    )

    expect(getByTestId('test')).toMatchSnapshot()
  })
})
