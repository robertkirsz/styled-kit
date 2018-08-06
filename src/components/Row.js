import PropTypes from 'prop-types'

import { screenSize } from '../styles'

import Div from './Div'

// prettier-ignore
const Row = Div.extend`
  flex: 1 1 auto;
  flex-flow: ${props => (props.reverse ? 'row-reverse' : 'row')} wrap;

  margin-left: -8px;
  margin-right: -8px;
  padding: 0 8px;

  box-sizing: border-box;

  ${screenSize.mediumUp`
    margin-left: -12px;
    margin-right: -12px;
  `}

  ${screenSize.largeUp`
    margin-left: -16px;
    margin-right: -16px;
  `}
`

Row.propTypes = {
  reverse: PropTypes.bool
}

export default Row
