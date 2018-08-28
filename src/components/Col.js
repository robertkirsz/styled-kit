import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Div from './Div'

const getSize = size => css`
  flex-basis: ${(100 / 12) * size}%;
  max-width: ${(100 / 12) * size}%;
`

// prettier-ignore
const Col = styled(Div)`
  flex: 1 0 0;
  max-width: 100%;
  padding-left: 8px;
  padding-right: 8px;

  box-sizing: border-box;

  ${props => css`
    ${props.small === true && 'flex-basis: 100%;'}
    ${Number.isInteger(props.small) && getSize(props.small)}
    ${Number.isInteger(props.offset) && `margin-left: ${(100 / 12) * props.offset}%;`}
    ${Number.isInteger(props.offsetSmall) && `margin-left: ${(100 / 12) * props.offsetSmall}%;`}
  `}

  ${props => props.theme.queries.mediumUp`
    ${Number.isInteger(props.medium) && getSize(props.medium)}
    ${Number.isInteger(props.offsetMedium) && `margin-left: ${(100 / 12) * props.offsetMedium}%;`}
  `}

  ${props => props.theme.queries.largeUp`
    ${Number.isInteger(props.large) && getSize(props.large)}
    ${Number.isInteger(props.offsetLarge) && `margin-left: ${(100 / 12) * props.offsetLarge}%;`}
  `}
`

Col.propTypes = {
  small: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  medium: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  large: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  offset: PropTypes.number,
  offsetSmall: PropTypes.number,
  offsetMedium: PropTypes.number,
  offsetLarge: PropTypes.number
}

export default Col
