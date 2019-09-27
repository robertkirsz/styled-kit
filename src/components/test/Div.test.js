import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'

import { styledKitMediaQueries } from '../../App'
import Div from '../Div'
import stuff from '../../stuff'

const props = Object.keys(stuff).reduce((result, prop) => {
  if (!stuff[prop]) return result
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
