import styled from 'styled-components'

import Div from '../components/Div'

import { screenSize } from '../styles'

// prettier-ignore
const ScreenSizeInfo = styled(Div)`
  height: 40px;
  border: 2px solid red;

  &::before {
    content: 'Small';
    ${screenSize.mediumUp`content: 'Medium';`}
    ${screenSize.largeUp`content: 'Large';`}
  }
`

export default ScreenSizeInfo
