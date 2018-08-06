import styled from 'styled-components'

import { screenSize } from '../styles'

import Div from './Div'

// prettier-ignore
const Container = styled(Div)`
  width: 100%;
  max-width: 1280px;

  margin: 0 auto;
  padding: 0 8px;

  box-sizing: border-box;

  ${screenSize.mediumUp`padding: 0 12px;`}
  ${screenSize.largeUp`padding: 0 16px;`}
`

export default Container
