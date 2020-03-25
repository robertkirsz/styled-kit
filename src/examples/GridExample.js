import React from 'react'
import styled from 'styled-components'

import Div from 'components/Div'
import { Container, Row, Column } from 'components/Grid'

import ScreenSizeInfo from 'examples/helpers/ScreenSizeInfo'
import GridHelper from 'examples/helpers/GridHelper'

export default function (props) {
  return (
    <Div column relative padding="24px 0" {...props}>
      <ScreenSizeInfo justifyCenter itemsCenter />

      <GridHelper />

      <Container>
        <Row>
          <Column small={12} medium={4} large={3}>
            <Item>Small 12 Medium 4 Large 3</Item>
          </Column>

          <Column small={12} medium={4} large={3}>
            <Item>Small 12 Medium 4 Large 3</Item>
          </Column>

          <Column small={12} medium={4} large={3}>
            <Item>Small 12 Medium 4 Large 3</Item>
          </Column>

          <Column small={12} medium={12} large={3}>
            <Item>Small 12 Medium 12 Large 3</Item>
          </Column>
        </Row>
      </Container>
    </Div>
  )
}

const Item = styled.div`
  padding: 8px;
  margin-bottom: 8px;
  background: rgba(255, 99, 71, 0.7);
  border: 2px solid tomato;
  width: 100%;
  color: white;
`
