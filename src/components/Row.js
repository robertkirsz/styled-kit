import PropTypes from 'prop-types'

import { media } from 'styles'

import Div from './Div'

const Row = Div.extend`
  flex: 1 1 auto;
  flex-flow: ${props => (props.reverse ? 'row-reverse' : 'row')} wrap;

  margin-left: -8px;
  margin-right: -8px;
  padding: 0 8px;

  ${media.mediumUp`
    margin-left: -12px;
    margin-right: -12px;
  `}

  ${media.largeUp`
    margin-left: -16px;
    margin-right: -16px;
  `}
`

Row.propTypes = {
  reverse: PropTypes.bool
}

export default Row
