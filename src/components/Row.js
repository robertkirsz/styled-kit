import PropTypes from 'prop-types'
import styled from 'styled-components'

import Div from './Div'

const propTypes = {
  reverse: PropTypes.bool
}

const Row = styled(Div)`
  flex: 1 1 auto;
  flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
  flex-wrap: wrap;
`

Row.propTypes = propTypes

export default Row
