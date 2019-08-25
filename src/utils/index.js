export const hasValue = value => ![null, undefined, '', false].includes(value)

export const isNumber = value => typeof value === 'number'

export const isString = value => typeof value === 'string'

export const isAlphaNumeric = value => isString(value) || isNumber(value)

export const camelToKebab = (string = '') => string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()

// Used to support number as size values in styled-components
export const withUnit = value => (isNumber(value) ? `${value}px` : value)

const directions = ['Left', 'Right', 'Top', 'Bottom']

// Returns margin or padding shorthands ('mTop', 'pBottom' etc)
export const createSpaces = type => props => {
  let result = ''

  directions.forEach(direction => {
    const property = props[`${type[0]}${direction}`]

    if (property !== undefined) {
      result += `${type}-${direction.toLowerCase()}: ${withUnit(property)};`
    }
  })

  return result
}

// Returns position values ('top', 'left' etc)
export const createPosition = props => {
  let result = ''

  directions.forEach(direction => {
    const property = props[`${direction.toLowerCase()}`]

    if (property !== undefined) {
      result += `${direction.toLowerCase()}: ${withUnit(property)};`
    }
  })

  return result
}

// Creates list helpers ('listBottom' etc)
export const createLists = props => {
  let result = ''

  directions.forEach((direction, index) => {
    const property = props[`list${direction}`]

    if (property !== undefined) {
      const value = property === true ? '8px' : withUnit(property)
      result += `> *:not(:${index % 2 ? 'last' : 'first'}-child) { margin-${direction.toLowerCase()}: ${value}; }`
    }
  })

  return result
}
