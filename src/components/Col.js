import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Div from './Div'

const getSize = size => css`
  flex-basis: ${(100 / 12) * size}%;
  max-width: ${(100 / 12) * size}%;
`

const propTypes = {
  small: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  medium: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  large: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  offset: PropTypes.number,
  offsetSmall: PropTypes.number,
  offsetMedium: PropTypes.number,
  offsetLarge: PropTypes.number
}

// prettier-ignore
const Col = styled(Div)`
  flex: 1 0 0;
  max-width: 100%;
  padding-left: 8px;
  padding-right: 8px;

  box-sizing: border-box;

  ${({ small, offsetSmall, medium, offsetMedium, large, offsetLarge, theme }) => css`
    ${small === true && 'flex-basis: 100%;'}
    ${Number.isInteger(small) && getSize(small)}
    ${Number.isInteger(offsetSmall) && `margin-left: ${(100 / 12) * offsetSmall}%;`}

    ${theme.queries.mediumUp`
      ${Number.isInteger(medium) && getSize(medium)}
      ${Number.isInteger(offsetMedium) && `margin-left: ${(100 / 12) * offsetMedium}%;`}
    `}

    ${theme.queries.largeUp`
      ${Number.isInteger(large) && getSize(large)}
      ${Number.isInteger(offsetLarge) && `margin-left: ${(100 / 12) * offsetLarge}%;`}
    `}
  `}
`

Col.propTypes = propTypes

export default Col
