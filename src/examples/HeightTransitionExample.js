import React, { Component } from 'react'
import styled from 'styled-components'

import Div from '../components/Div'
import HeightTransition from '../components/HeightTransition'

class HeightTransitionExample extends Component {
  state = {
    show1: false,
    show2: false,
    show3: false
  }

  render() {
    return (
      <Wrapper grid>
        <div>
          <Button mBottom={8} onClick={() => this.setState({ show1: !this.state.show1 })}>
            Show
          </Button>

          <HeightTransition isActive={this.state.show1}>
            <Container column>
              <Item />
              <Item />
              <Item />
            </Container>
          </HeightTransition>
        </div>

        <div>
          <Button mBottom={8} onClick={() => this.setState({ show2: !this.state.show2 })}>
            Show
          </Button>

          <HeightTransition isActive={this.state.show2}>
            <Container column>
              <Item justifyCenter itemsCenter>
                <Button onClick={() => this.setState({ show3: !this.state.show3 })}>Show</Button>
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

export default HeightTransitionExample

const Wrapper = styled(Div)`
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

const Button = Div.withComponent('button')
