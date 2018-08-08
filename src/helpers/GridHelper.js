// This is a grid overlay that helps to make sure everything is alligned precisly with the 12-column grid layout.

import React from 'react'
import styled from 'styled-components'

import Div from '../components/Div'
import Container from '../components/Container'
import Row from '../components/Row'
import Col from '../components/Col'

export default () => (
  <GridHelper>
    <Container>
      <Row>
        {[...Array(12)].map((v, i) => (
          <Col key={i} small={4} medium={2} large={1}>
            <Div flex={1} overlay="powderblue" />
          </Col>
        ))}
      </Row>
    </Container>
  </GridHelper>
)

// prettier-ignore
const GridHelper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  z-index: 1000;
`
