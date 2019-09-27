import React from 'react'
import styled from 'styled-components'

import Div from '../components/Div'

const DivExample = props => (
  <Wrapper {...props}>
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

    <Container itemsStart>
      <Item />
      <Item />
      <Item />
    </Container>

    <Container itemsCenter>
      <Item />
      <Item />
      <Item />
    </Container>

    <Container itemsEnd>
      <Item />
      <Item />
      <Item />
    </Container>

    <Container itemsStretch>
      <Item />
      <Item />
      <Item />
    </Container>
  </Wrapper>
)

export default DivExample

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 150px);
  grid-auto-rows: 150px;
  grid-gap: 8px;
`

const Container = styled(Div)`
  background: powderblue;
  padding: 4px;
`

const Item = styled(Div)`
  width: 30px;
  height: 30px;
  background: tomato;
  margin: 4px;
`
