import React, { Component } from 'react'

import Div from '../components/Div'
import Slider from '../components/Slider'

class SliderExample extends Component {
  state = { activeSlide: 0 }

  goTo = activeSlide => event => this.setState({ activeSlide })

  render() {
    return (
      <Div column listTop={24}>
        <h1>
          <code>{'<Slider />'}</code>
        </h1>

        <Div listLeft>
          <button onClick={this.goTo(0)}>1</button>
          <button onClick={this.goTo(1)}>2</button>
          <button onClick={this.goTo(2)}>3</button>
          <button onClick={this.goTo(3)}>4</button>
        </Div>

        <Slider activeSlide={this.state.activeSlide} {...this.props}>
          <Div column background="tomato" padding={16}>
            <h1>Hey!</h1>
            <h2>This is Slider!</h2>
            <h3>How cool is that?</h3>
          </Div>

          <Div column background="powderblue" padding={16}>
            <h1>Niiiice...</h1>
          </Div>

          <Div column background="pink" padding={16}>
            <h2>See how it animates?</h2>
            <h3>Ain't it sweet?</h3>
          </Div>

          <Div background="gold">
            <Div column background="silver" margin={16}>
              <h2>I have a margin around me</h2>
            </Div>
          </Div>
        </Slider>
      </Div>
    )
  }
}

export default SliderExample
