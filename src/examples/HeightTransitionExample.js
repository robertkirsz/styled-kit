import React, { Component } from 'react'
import styled from 'styled-components'

import Div from '../components/Div'
import HeightTransition from '../components/HeightTransition'

export default class HeightTransitionExample extends Component {
  state = {
    show1: false,
    show2: false,
    show3: false
  }

  render() {
    return (
      <Wrapper>
        <div>
          <Div as="button" mBottom={8} onClick={() => this.setState({ show1: !this.state.show1 })}>
            Show
          </Div>

          <HeightTransition isActive={this.state.show1}>
            <Container column>
              <Item />
              <Item />
              <Item />
            </Container>
          </HeightTransition>
        </div>

        <div>
          <Div as="button" mBottom={8} onClick={() => this.setState({ show2: !this.state.show2 })}>
            Show
          </Div>

          <HeightTransition isActive={this.state.show2}>
            <Container column>
              <Item justifyCenter itemsCenter>
                <Div as="button" onClick={() => this.setState({ show3: !this.state.show3 })}>
                  Show
                </Div>
              </Item>

              <HeightTransition isActive={this.state.show3}>
                <Container column>
                  <Item />
                  <Item />
                  <Item />
                </Container>
              </HeightTransition>
            </Container>
          </HeightTransition>
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-gap: 8px;
`

const Container = styled(Div)`
  background: powderblue;
  width: 300px;
`

const Item = styled(Div)`
  height: 60px;
  background: tomato;
  margin: 20px;
`
