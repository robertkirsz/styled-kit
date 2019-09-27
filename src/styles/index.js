import { css, createGlobalStyle } from 'styled-components'

export const queries = [
  { name: 'smallOnly', value: '(max-width: 639px)' },
  { name: 'mediumUp', value: '(min-width: 640px)' },
  { name: 'mediumDown', value: '(max-width: 1023px)' },
  { name: 'largeUp', value: '(min-width: 1024px)' }
]

// Iterates through all the queries and creates a media template for each one
export const screenSize = queries.reduce(
  (result, query) => ({
    ...result,
    [query.name]: (...args) =>
      css`
        @media only screen and ${query.value} {
          ${css(...args)};
        }
      `
  }),
  {}
)

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font: 16px sans-serif;
  }
`
