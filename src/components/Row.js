import PropTypes from 'prop-types'
import styled from 'styled-components'

import Div from './Div'

// prettier-ignore
const Row = styled(Div)`
  flex: 1 1 auto;
  flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
  flex-wrap: wrap;
`

Row.propTypes = {
  reverse: PropTypes.bool
}

export default Row
