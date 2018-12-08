import React, { cloneElement, createContext, useContext, isValidElement } from 'react'

export const copyContext = createContext()

const { Provider, Consumer } = copyContext

export const checkForHtml = value => /<[a-z][\s\S]*>/i.test(value) || /&[a-z]*;/i.test(value)

// Replaces 'Hey {name}!' with 'Hey John!' if 'values' is`{ name: 'John' }`
export const parseValues = (string = '', values) => {
  // If there's are no values then there's nothing no parse
  if (!values) return string
  // We gonna split the string on every '{' and '}' which are placeholder separators
  const result = string.split(/{|}/)
  // This flag will be used at the end to either return a plain string or a React node
  let hasReactNodes = false

  // Let's go through each and every value that needs to be parsed...
  Object.keys(values).forEach(key => {
    // This is the value we're currently checking
    const currentValue = values[key]
    // And this is where it's gonna be inserted in the result array
    const currentItemsIndex = result.indexOf(key)

    // By default let's assume the item is a plain string
    let currentItem = currentValue

    // But if has HTML tags in it...
    if (checkForHtml(currentValue)) {
      // Do the dangerous thingy
      currentItem = <span key={key} dangerouslySetInnerHTML={{ __html: currentValue }} /> // eslint-disable-line
    }

    // And if it's a React node...
    if (isValidElement(currentValue)) {
      // Add a key to it and set a flag so we know we're dealing with React nodes here
      currentItem = cloneElement(currentValue, { key })
      hasReactNodes = true
    }

    // Now it's time to put the item in it's place
    result[currentItemsIndex] = currentItem
  })

  // If we have any React nodes in the result, we return it as an array since React can render that
  // In other case we convert it to a string
  return hasReactNodes ? result : result.join('')
}

// HOC - usefull if you want to get all the copy inside a component (there's also a Hook for that in 'hooks' folder)
export const withCopy = Component => props => <Consumer>{copy => <Component {...props} copy={copy} />}</Consumer>

// Component that returns a string or a span-wrapped HTML or a React node. Usefull if you need only one particular piece of the copy.
export const Copy = ({ id, values, ...props }) => {
  if ([null, undefined, NaN].includes(id)) return ''

  const copy = useContext(copyContext)
  const value = copy[id] || id
  const parsedValue = parseValues(value, values)

  if (checkForHtml(value)) return <span dangerouslySetInnerHTML={{ __html: parsedValue }} {...props} /> // eslint-disable-line

  return parsedValue
}

// Provider - you need to wrap the app with it for copy to be served via Context
export default ({ copy, language, ...props }) => <Provider value={language ? copy[language] : copy} {...props} />
