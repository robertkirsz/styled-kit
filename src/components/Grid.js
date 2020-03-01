import styled, { css } from 'styled-components'

import Div from './Div'

const getSize = size => css`
  flex-basis: ${(100 / 12) * size}%;
  max-width: ${(100 / 12) * size}%;
`

export const Container = styled(Div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`

export const Row = styled(Div)`
  flex: 1 1 auto;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  flex-wrap: wrap;
`

export const Column = styled(Div)`
  flex: 1 0 0;
  max-width: 100%;
  padding-left: 8px;
  padding-right: 8px;

  box-sizing: border-box;

  ${({ small, offsetSmall, medium, offsetMedium, large, offsetLarge, theme }) => css`
    ${small === true && 'flex-basis: 100%;'}
    ${Number.isInteger(small) && getSize(small)}
    ${Number.isInteger(offsetSmall) && `margin-left: ${(100 / 12) * offsetSmall}%;`}

    ${theme.styledKitMediaQueries.medium`
      ${Number.isInteger(medium) && getSize(medium)}
      ${Number.isInteger(offsetMedium) && `margin-left: ${(100 / 12) * offsetMedium}%;`}
    `}

    ${theme.styledKitMediaQueries.large`
      ${Number.isInteger(large) && getSize(large)}
      ${Number.isInteger(offsetLarge) && `margin-left: ${(100 / 12) * offsetLarge}%;`}
    `}
  `}
`
