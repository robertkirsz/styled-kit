import styled, { css } from 'styled-components'
import stuff from 'stuff'
import memoize from 'utils/memoize'
import camelToKebab from 'utils/camelToKebab'

const stuffKeys = Object.keys(stuff)
const isStuffKey = memoize(item => stuffKeys.includes(item))

const createCss = props => (css, prop) => {
  const value = typeof stuff[prop] === 'function' ? stuff[prop](props[prop], props) : stuff[prop]
  return ['', false, undefined].includes(value) ? css : `${css}${value}`
}

const doStuff = props =>
  Object.keys(props)
    .filter(isStuffKey)
    .reduce(createCss(props), '')

function doMediaQueriesStuff(props = {}) {
  const { styledKitMediaQueries = {} } = props.theme || {}
  const queryNames = Object.keys(styledKitMediaQueries)

  if (!queryNames.length) return

  const queryNameToValuesMap = queryNames.reduce((all, query) => {
    const declaration = props[query]

    if (!declaration) return all

    if (typeof declaration === 'string') return { ...all, [query]: declaration }

    if (Array.isArray(declaration))
      return {
        ...all,
        [query]: declaration.reduce((all, property) => {
          const stuffProperty = stuff[property]
          if (typeof stuffProperty !== 'string') return all
          return `${all}${stuffProperty}`
        }, '')
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

export const createQueries = sizes =>
  Object.entries(sizes).reduce(
    (result, [key, value]) => ({
      ...result,
      [key]: (...args) =>
        css`
          @media ${value} {
            ${css(...args)};
          }
        `
    }),
    {}
  )
