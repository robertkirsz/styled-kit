import { css, createGlobalStyle } from 'styled-components'

export const queries = [
  { name: 'smallOnly', value: '(max-width: 639px)' },
  { name: 'mediumUp', value: '(min-width: 640px)' },
  { name: 'mediumDown', value: '(max-width: 1023px)' },
  { name: 'largeUp', value: '(min-width: 1024px)' }
]

// Iterates through all the queries and creates a media template for each one
// prettier-ignore
export const screenSize = queries.reduce(
  (result, query) => ({
    ...result,
    [query.name]: (...args) => css`@media ${query.value} { ${css(...args)}; }`
  }),
  {}
)

// prettier-ignore
export const small = (...args) => css`@media (max-width: 1023px) { ${css(...args)}; }`
// prettier-ignore
export const large = (...args) => css`@media (min-width: 1024px) { ${css(...args)}; }`

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font: 16px sans-serif;
    background: #55b9f3;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`
