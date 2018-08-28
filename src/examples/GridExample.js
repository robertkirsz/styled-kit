import React from 'react'
import styled from 'styled-components'

import ScreenSizeInfo from '../helpers/ScreenSizeInfo'
import { withSizes } from '../providers/ScreenSizeProvider'
import GridHelper from '../helpers/GridHelper'

import Div from '../components/Div'
import Container from '../components/Container'
import Row from '../components/Row'
import Col from '../components/Col'

const GridExample = props => (
  <Div column relative padding="24px 0" {...props}>
    <ScreenSizeInfo justifyCenter itemsCenter />

    <GridHelper />

    <Container>
      <Row>
        <Col small={12} medium={4} large={3}>
          <Item>Small 12 Medium 4 Large 3</Item>
        </Col>

        <Col small={12} medium={4} large={3}>
          <Item>Small 12 Medium 4 Large 3</Item>
        </Col>

        <Col small={12} medium={4} large={3}>
          <Item>Small 12 Medium 4 Large 3</Item>
        </Col>

        <Col small={12} medium={12} large={3}>
          <Item>Small 12 Medium 12 Large 3</Item>
        </Col>
      </Row>
    </Container>
  </Div>
)

export default withSizes(GridExample)

const Item = styled.div`
  padding: 8px;
  margin-bottom: 8px;
  background: rgba(255, 99, 71, 0.7);
  border: 2px solid tomato;
  width: 100%;
  color: white;
`
