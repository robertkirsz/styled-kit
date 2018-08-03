import React, { Component } from 'react'
import styled from 'styled-components'

import Div from '../components/Div'

class DivExample extends Component {
  state = {}

  render() {
    return (
      <Wrapper grid>
        <Container justifyStart>
          <Item />
          <Item />
          <Item />
        </Container>

        <Container justifyCenter>
          <Item />
          <Item />
          <Item />
        </Container>

        <Container justifyEnd>
          <Item />
          <Item />
          <Item />
        </Container>

        <Container justifyAround>
          <Item />
          <Item />
          <Item />
        </Container>

        <Container justifyBetween>
          <Item />
          <Item />
          <Item />
        </Container>

        <Container justifyStart itemsStart>
          <Item />
          <Item />
          <Item />
        </Container>

        <Container justifyCenter itemsCenter>
          <Item />
          <Item />
          <Item />
        </Container>

        <Container justifyEnd itemsEnd>
          <Item />
          <Item />
          <Item />
        </Container>
      </Wrapper>
    )
  }
}

export default DivExample

const Wrapper = styled(Div)`
  grid-template-columns: repeat(auto-fit, 300px);
  grid-auto-rows: 300px;
  grid-gap: 8px;
`

const Container = styled(Div)`
  background: powderblue;
  padding: 4px;
`

const Item = styled(Div)`
  width: 60px;
  height: 60px;
  background: tomato;
  margin: 4px;
`
