import React from 'react'
import { render } from '@testing-library/react'

import CopyProvider, { withCopy, Copy, parseValues } from 'providers/CopyProvider'

const en = {
  hello: 'Hello!',
  htmlHello: '<h1>Hello!</h1>'
}

const pl = { hello: 'Cześć!' }

describe('<CopyProvider />', () => {
  test('Provides copy for <Copy /> component', () => {
    const { container } = render(
      <CopyProvider copy={en}>
        <Copy id="hello" />
      </CopyProvider>
    )

    expect(container).toHaveTextContent('Hello!')
  })

  test('Provides copy for withCopy HOC', () => {
    const WithCopy = withCopy(props => props.copy.hello)

    const { container } = render(
      <CopyProvider copy={en}>
        <WithCopy />
      </CopyProvider>
    )

    expect(container).toHaveTextContent('Hello!')
  })

  test('Works while nested and with different locales', () => {
    const { container } = render(
      <CopyProvider language="pl" copy={{ pl, en }}>
        <Copy id="hello" />

        <CopyProvider language="en" copy={{ pl, en }}>
          <Copy id="hello" />
        </CopyProvider>
      </CopyProvider>
    )

    expect(container).toHaveTextContent('Cześć!Hello!')
  })

  test('Works with HTML', () => {
    const { container } = render(
      <CopyProvider copy={en}>
        <Copy id="htmlHello" />
      </CopyProvider>
    )

    expect(container).toContainHTML('<h1>Hello!</h1>')
  })

  test('Works with `values` prop', () => {
    const id = 'text'
    const copy = { [id]: 'A {string}, a {node}, an {html}, and {anotherString}' }

    const values = {
      string: 'String',
      node: <h1 data-testid="node">Node</h1>,
      html: '<h2>HTML</h2>',
      anotherString: 'another String'
    }

    const { container, getByTestId } = render(
      <CopyProvider copy={copy}>
        <Copy id={id} values={values} />
      </CopyProvider>
    )

    expect(container).toHaveTextContent('A String, a Node, an HTML, and another String')
    expect(container).toContainElement(getByTestId('node'))
  })

  test('Returns the value of `id` prop if not found', () => {
    const { container } = render(
      <CopyProvider copy={en}>
        <Copy id="nonExistingId" />
      </CopyProvider>
    )

    expect(container).toHaveTextContent('nonExistingId')
  })

  test("Returns an empty string if there's no id prop", () => {
    const { container } = render(
      <CopyProvider copy={en}>
        <Copy />
      </CopyProvider>
    )

    expect(container).toBeEmpty()
  })
})

describe('parseValues()', () => {
  test('Properly parses interpolated string values', () => {
    const string = 'Hey {userName}! You found {amount} gold!'
    const values = { userName: 'John', amount: 12 }
    const parsedString = 'Hey John! You found 12 gold!'

    expect(parseValues(string, values)).toBe(parsedString)
    expect(parseValues(string)).toBe(string)
    expect(parseValues()).toBe('')
  })
})
