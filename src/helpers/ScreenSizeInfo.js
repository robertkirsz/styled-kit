import styled from 'styled-components'

import Div from '../components/Div'

// prettier-ignore
const ScreenSizeInfo = styled(Div)`
  height: 40px;

  &::before {
    content: 'Small';
    ${props => props.theme.queries.mediumUp`content: 'Medium';`}
    ${props => props.theme.queries.largeUp`content: 'Large';`}
  }
`

export default ScreenSizeInfo
