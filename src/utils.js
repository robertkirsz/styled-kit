import { css } from 'styled-components'

export const isNumber = value => typeof value === 'number'

export const camelToKebab = (string = '') => string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()

// Used to support number as size values in styled-components
export const withUnit = value => (isNumber(value) ? `${value}px` : value)

export function memoize(fn) {
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

export function isShallowEqual(firstObject, secondObject) {
  for (const key in firstObject) {
    if (!(key in secondObject) || firstObject[key] !== secondObject[key]) return false
  }

  for (const key in secondObject) {
    if (!(key in firstObject) || firstObject[key] !== secondObject[key]) return false
  }

  return true
}
