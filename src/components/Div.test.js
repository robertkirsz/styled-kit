import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider, StyleSheetManager } from 'styled-components'
import 'jest-styled-components'

import Div from 'components/Div'
import createQueries from 'utils/createQueries'
import stuff from '../stuff'

export const styledKitMediaQueries = createQueries({
  small: '(max-width: 200px)',
  medium: '(min-width: 300px)',
  large: '(min-width: 400px)'
})

function DivTest(props) {
  return (
    <ThemeProvider theme={{ styledKitMediaQueries }}>
      <StyleSheetManager disableVendorPrefixes>
        <Div {...props} />
      </StyleSheetManager>
    </ThemeProvider>
  )
}

describe('Root props', () => {
  it('Flex', () => {
    const trueResult = renderer.create(<DivTest row />).toJSON()
    expect(trueResult).toHaveStyleRule('display', 'flex')
    expect(trueResult).toHaveStyleRule('flex-direction', 'row')

    const falseResult = renderer.create(<DivTest row={false} />).toJSON()
    expect(falseResult).toHaveStyleRule('display', 'flex')
    expect(falseResult).not.toHaveStyleRule('flex-direction', 'row')
  })

  it('Size', () => {
    const result = renderer.create(<DivTest width={100} maxWidth={200} height="100%" maxHeight="200em" />).toJSON()
    expect(result).toHaveStyleRule('width', '100px')
    expect(result).toHaveStyleRule('max-width', '200px')
    expect(result).toHaveStyleRule('height', '100%')
    expect(result).toHaveStyleRule('max-height', '200em')
  })

  it('Space', () => {
    const result = renderer
      .create(
        <DivTest
          margin={16}
          marginTop={8}
          marginRight={8}
          marginBottom={8}
          marginLeft={8}
          padding={16}
          paddingTop={8}
          paddingRight={8}
          paddingBottom={8}
          paddingLeft={8}
        />
      )
      .toJSON()

    expect(result).toHaveStyleRule('display', 'flex')
    expect(result).toHaveStyleRule('margin', '16px')
    expect(result).toHaveStyleRule('margin-top', '8px')
    expect(result).toHaveStyleRule('margin-right', '8px')
    expect(result).toHaveStyleRule('margin-bottom', '8px')
    expect(result).toHaveStyleRule('margin-left', '8px')
    expect(result).toHaveStyleRule('padding', '16px')
    expect(result).toHaveStyleRule('padding-top', '8px')
    expect(result).toHaveStyleRule('padding-right', '8px')
    expect(result).toHaveStyleRule('padding-bottom', '8px')
    expect(result).toHaveStyleRule('padding-left', '8px')
  })

  it('Border', () => {
    const result = renderer.create(<DivTest border="1px solid pink" radius="50%" />).toJSON()
    expect(result).toHaveStyleRule('border', '1px solid pink')
    expect(result).toHaveStyleRule('border-radius', '50%')
  })

  it('Text', () => {
    const result = renderer.create(<DivTest color="black" />).toJSON()
    expect(result).toHaveStyleRule('color', 'black')
  })

  it('Hiding', () => {
    const hidden = renderer.create(<DivTest hide />).toJSON()
    const notHidden = renderer.create(<DivTest hide={false} />).toJSON()
    expect(hidden).toHaveStyleRule('display', 'none')
    expect(notHidden).not.toHaveStyleRule('display', 'none')
  })
})

describe('Media queries', () => {
  it('As string', () => {
    const result = renderer.create(<DivTest small="color: black;" />).toJSON()
    expect(result).toHaveStyleRule('color', 'black', { media: '(max-width: 200px)' })
  })

  it('As object of Div props', () => {
    const trueResult = renderer.create(<DivTest small={{ itemsCenter: true }} />).toJSON()
    expect(trueResult).toHaveStyleRule('align-items', 'center', { media: '(max-width: 200px)' })

    const falseResult = renderer.create(<DivTest small={{ itemsCenter: false }} />).toJSON()
    expect(falseResult).not.toHaveStyleRule('align-items', 'center', { media: '(max-width: 200px)' })
  })

  it('As object of style-like props', () => {
    const result = renderer.create(<DivTest small={{ verticalAlign: 'middle' }} />).toJSON()
    expect(result).toHaveStyleRule('vertical-align', 'middle', { media: '(max-width: 200px)' })
  })

  it('As array', () => {
    const result = renderer.create(<DivTest small={['column', 'itemsCenter']} />).toJSON()
    expect(result).toHaveStyleRule('flex-direction', 'column', { media: '(max-width: 200px)' })
    expect(result).toHaveStyleRule('align-items', 'center', { media: '(max-width: 200px)' })
  })
})

describe('Snapshot', () => {
  it('Matches', () => {
    const samples = {
      background: 'pink',
      backgroundImage: 'cat.jpg',
      border: '2px solid pink',
      font: '300 16px/1.2 sans-serif',
      fontFamily: 'sans-serif',
      fontSize: 16,
      fontWeight: 300,
      lineHeight: 1.2,
      letterSpacing: 2,
      textAlign: 'center'
    }

    const props = Object.keys(stuff).reduce((result, prop) => {
      // Ignore shorthand helpers as they duplicate CSS in snapshot
      if (['mTop', 'mRight', 'mBottom', 'mLeft', 'pTop', 'pRight', 'pBottom', 'pLeft'].includes(prop)) return result
      return { ...result, [prop]: typeof stuff[prop] === 'function' ? samples[prop] || 8 : true }
    }, {})

    const result = renderer
      .create(
        <DivTest
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
      )
      .toJSON()

    expect(result).toMatchSnapshot()
  })
})
