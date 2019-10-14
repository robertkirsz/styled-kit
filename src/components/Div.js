import styled from 'styled-components'

import stuff from 'stuff'
import { camelToKebab } from 'utils'

const memoize = fn => {
  const cache = {}
  return (...args) => {
    const n = args[0]
    if (n in cache) {
      // console.log('Fetching from cache', n)
      return cache[n]
    } else {
      // console.log('Calculating result', n)
      const result = fn(n)
      cache[n] = result
      return result
    }
  }
}

const stuffKeys = Object.keys(stuff)
const isStuffKey = memoize(item => stuffKeys.includes(item))

const createCss = props => (css, prop) => {
  const value = stuff[prop](props[prop], props)
  return !['', false, undefined].includes(value) ? `${css}${value}` : css
}

const doStuff = props =>
  Object.keys(props)
    .filter(isStuffKey)
    .reduce(createCss(props), '')

function doMediaQueriesStuff(props) {
  if (!props.theme || !props.theme.styledKitMediaQueries) return

  const queryNames = Object.keys(props.theme.styledKitMediaQueries)

  if (!queryNames.length) return

  const queryNameToValuesMap = queryNames.reduce((all, query) => {
    const declaration = props[query]

    if (!declaration) return all

    const allDeclarations =
      typeof declaration === 'string'
        ? declaration
        : Object.keys(props[query]).reduce((all, property) => {
            const value = props[query][property]
            const foo = stuff[property]

            if (!foo) return `${all}${camelToKebab(property)}:${value};`

            const declaration = typeof foo === 'function' ? foo(value, props) : foo

            return `${all}${declaration}`
          }, '')

    return { ...all, [query]: allDeclarations }
  }, {})

  const cssString = queryNames.reduce((all, query) => {
    if (!queryNameToValuesMap[query]) return all

    return `${all}@media ${props.theme.styledKitMediaQueries[query]} {${queryNameToValuesMap[query]}}`
  }, '')

  return cssString
}

export default styled.div`
  display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
  ${doStuff}
  ${doMediaQueriesStuff}
`
