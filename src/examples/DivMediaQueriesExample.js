import React from 'react'
import styled from 'styled-components'

import Div from '../components/Div'

const DivExample = props => (
  <Wrapper grid {...props}>
    <Div
      small={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'pink',
        listTop: 8
      }}
      medium={{
        row: true,
        justifyCenter: true,
        itemsCenter: true,
        background: 'powderblue',
        listLeft: 8
      }}
      large={`
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: gray;
        > *:not(:first-child) { margin-top: 8px; }
      `}
    >
      <Item />
      <Item />
      <Item />
    </Div>
  </Wrapper>
)

export default DivExample

const Wrapper = styled(Div)`
  grid-template-columns: repeat(auto-fit, 100px);
  grid-auto-rows: 100px;
  grid-gap: 8px;
`

const Item = styled.div`
  width: 20px;
  height: 20px;
  background: tomato;
`
