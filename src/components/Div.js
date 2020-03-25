import styled, { css } from 'styled-components'
import stuff from 'stuff'
import camelToKebab from 'utils/camelToKebab'
import isDivProp from 'utils/isDivProp'

function createCss(props) {
  return (previous, current) => {
    const stuffValue = stuff[current]
    const propValue = props[current]

    if (typeof stuffValue === 'string' && propValue) return `${previous}${stuffValue}`
    if (typeof stuffValue === 'function') return `${previous}${stuffValue(propValue, props)}`
    return previous
  }
}

function doStuff(props) {
  return Object.keys(props).filter(isDivProp).reduce(createCss(props), '')
}

function doMediaQueriesStuff(props = {}) {
  const { styledKitMediaQueries = {} } = props.theme || {}
  const queryNames = Object.keys(styledKitMediaQueries)

  if (!queryNames.length) return

  const queryNameToValuesMap = queryNames.reduce((all, query) => {
    const declaration = props[query]

    if (!declaration) return all

    if (typeof declaration === 'string') return { ...all, [query]: declaration }

    if (Array.isArray(declaration)) {
      return {
        ...all,
        [query]: declaration.reduce((all, property) => {
          const stuffProperty = stuff[property]

          if (typeof stuffProperty !== 'string') return all
          return `${all}${stuffProperty}`
        }, '')
      }
    }

    return {
      ...all,
      [query]: Object.keys(declaration).reduce((all, property) => {
        const value = declaration[property]
        const stuffProperty = stuff[property]

        if (!stuffProperty) return `${all}${camelToKebab(property)}:${value};`
        return `${all}${typeof stuffProperty === 'function' ? stuffProperty(value, props) : stuffProperty}`
      }, '')
    }
  }, {})

  return queryNames.reduce(
    (all, query) =>
      !queryNameToValuesMap[query]
        ? all
        : css`
            ${all} ${styledKitMediaQueries[query]`${queryNameToValuesMap[query]}`}
          `,
    ''
  )
}

export default styled.div`
  display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
  ${doStuff}
  ${doMediaQueriesStuff}
`
