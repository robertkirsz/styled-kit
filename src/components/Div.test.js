import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'

import Div, { createQueries } from './Div'
import stuff from '../stuff'

export const styledKitMediaQueries = createQueries({
  small: '(max-width: 639px)',
  medium: '(min-width: 640px)',
  large: '(min-width: 1024px)'
})

const props = Object.keys(stuff).reduce((result, prop) => {
  // TODO: Ignore shorthand helper? They duplicate CSS styles.
  if (['mTop', 'mRight', 'mBottom', 'mLeft', 'pTop', 'pRight', 'pBottom', 'pLeft'].includes(prop)) return result
  return { ...result, [prop]: typeof stuff[prop] === 'function' ? 1 : true }
}, {})

describe('<Div />', () => {
  it('Matches snapshot', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={{ styledKitMediaQueries }}>
        <Div
          data-testid="test"
          {...props}
          small={props}
          medium={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'pink'
          }}
          large={`
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: gray;
            > *:not(:first-child) { margin-top: 8px; }
          `}
        />
      </ThemeProvider>
    )

    expect(getByTestId('test')).toMatchSnapshot()
  })
})
