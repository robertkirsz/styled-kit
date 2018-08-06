import React, { Component } from 'react'
import styled from 'styled-components'

import ScreenSizeInfo from '../helpers/ScreenSizeInfo'

import Div from '../components/Div'
import Container from '../components/Container'
import Row from '../components/Row'
import Col from '../components/Col'

class GridExample extends Component {
  state = {}

  render() {
    return (
      <Wrapper column>
        <ScreenSizeInfo justifyCenter itemsCenter />

        <Container>
          <Row style={{ outline: '2px solid red' }}>
            <Col small={12} medium={4} large={3} style={{ outline: '2px solid green' }}>Hey!</Col>
            <Col small={12} medium={4} large={3} style={{ outline: '2px solid green' }}>Hey!</Col>
            <Col small={12} medium={4} large={3} style={{ outline: '2px solid green' }}>Hey!</Col>
            <Col small={12} medium={12} large={3} style={{ outline: '2px solid green' }}>Hey!</Col>
          </Row>
        </Container>
      </Wrapper>
    )
  }
}

export default GridExample

// prettier-ignore
const Wrapper = styled(Div)`
`
