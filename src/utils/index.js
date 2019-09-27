export const isNumber = value => typeof value === 'number'

export const camelToKebab = (string = '') => string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()

// Used to support number as size values in styled-components
export const withUnit = value => (isNumber(value) ? `${value}px` : value)
