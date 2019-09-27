import styled from 'styled-components'

import stuff from '../stuff'
import { camelToKebab } from '../utils'

function doStuff(props) {
  return Object.keys(props).reduce((css, prop) => {
    const y = stuff[prop]
    return y ? `${css}${typeof y === 'function' ? y(props[prop], props) : y}` : css
  }, '')
}

function doMediaQueriesStuff(props = {}) {
  try {
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
              let foo = stuff[property]

              if (!foo) return `${all}${camelToKebab(property)}:${value};`

              const declaration = typeof foo === 'function' ? foo(value) : foo

              return `${all}${declaration}`
            }, '')

      return { ...all, [query]: allDeclarations }
    }, {})

    const cssString = queryNames.reduce((all, query) => {
      if (!queryNameToValuesMap[query]) return all

      return `${all}@media ${props.theme.styledKitMediaQueries[query]} {${queryNameToValuesMap[query]}}`
    }, '')

    return cssString
  } catch {}
}

export default styled.div`
  display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
  ${doStuff}
  ${doMediaQueriesStuff}
`
