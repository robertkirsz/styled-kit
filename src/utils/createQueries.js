import { css } from 'styled-components'

export default function createQueries(sizes) {
  return Object.entries(sizes).reduce(
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
}
