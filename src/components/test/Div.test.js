import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'

import Div from '../Div'

describe('<Div />', () => {
  const handleDone = jest.fn()

  it('Matches snapshot', () => {
    render(
      <ThemeProvider theme={{}}>
        <Div
          data-testid="test"
          absolute
          fixed
          relative
          flexNone
          row
          rowReverse
          column
          columnReverse
          wraps
          justifyStart
          justifyEnd
          justifyCenter
          justifyBetween
          justifyAround
          justifyEvenly
          itemsStart
          itemsEnd
          itemsCenter
          itemsBaseline
          itemsStretch
          contentStart
          contentEnd
          contentCenter
          contentBetween
          contentArouns
          contentStretch
          selfAuto
          selfStart
          selfEnd
          selfCenter
          selfBaseline
          selfStretch
          layer
          hide
          top={1}
          right={1}
          bottom={1}
          left={1}
          margin={1}
          marginTop={1}
          marginRight={1}
          marginBottom={1}
          marginLeft={1}
          padding={1}
          paddingTop={1}
          paddingRight={1}
          paddingBottom={1}
          paddingLeft={1}
          listLeft
          listRight
          listTop
          listBottom
          clickable
          noPointerEvents
          onDone={handleDone}
        />
      </ThemeProvider>
    )

    expect(handleDone.mock.calls[0][0]).toMatchSnapshot()
  })
})
