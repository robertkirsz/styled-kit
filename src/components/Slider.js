import React, { Component, Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default class Slider extends Component {
  static propTypes = {
    activeSlide: PropTypes.number,
    children: PropTypes.node.isRequired,
    heightProperty: PropTypes.string,
    duration: PropTypes.number,
    alignTop: PropTypes.bool,
    alignBottom: PropTypes.bool
  }

  static defaultProps = {
    activeSlide: 0,
    heightProperty: 'clientHeight',
    duration: 500,
    alignTop: false,
    alignBottom: false
  }

  static getDerivedStateFromProps = (props, state) =>
    props.activeSlide !== state.activeSlide ? { activeSlide: props.activeSlide } : null

  state = {
    activeSlide: this.props.activeSlide,
    height: 'auto'
  }

  slideHeights = []

  // TODO: no unused var prevState
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.activeSlide !== this.props.activeSlide) {
      this.doubleUpdate('height', this.slideHeights[prevProps.activeSlide], this.slideHeights[this.props.activeSlide])
    }
  }

  doubleUpdate = (key, firstValue, secondValue) =>
    this.setState({ [key]: firstValue }, () => {
      this.setState({ [key]: secondValue })
      setTimeout(() => this.handleTransitionEnd(), this.props.duration)
    })

  handleTransitionEnd = () => this.setState(({ height }) => ({ height: !height ? 0 : 'auto' }))

  setRef = (node, index) => {
    if (node === null) return
    this.slideHeights[index] = node[this.props.heightProperty]
  }

  takeCareOfChildren = (child, index) => {
    const { activeSlide } = this.state

    const isActive = activeSlide === index
    const isPrevious = index < activeSlide
    const isNext = index > activeSlide

    const style = {
      opacity: isActive ? 1 : 0,
      position: !isActive && 'absolute',
      pointerEvents: !isActive && 'none',
      // height: !isActive && this.slideHeights[index],
      transform: `translate3d(${isPrevious ? '-100%' : isNext ? '100%' : 0}, 0, 0)`,
      transition: `all ${this.props.duration}ms cubic-bezier(0.23, 1, 0.32, 1)`
    }

    const props = { style, ref: node => this.setRef(node, index) }

    return cloneElement(child, props)
  }

  render() {
    const { activeSlide, heightProperty, duration, alignTop, alignBottom, children, ...props } = this.props
    const { height } = this.state

    return (
      <Wrapper
        onTransitionEnd={this.handleTransitionEnd}
        duration={duration}
        alignTop={alignTop}
        alignBottom={alignBottom}
        style={{ height }}
        {...props}
      >
        {Children.toArray(children).map(this.takeCareOfChildren)}
      </Wrapper>
    )
  }
}

// prettier-ignore
const Wrapper = styled.div`
  display: flex;
  align-items: ${({ alignTop, alignBottom }) => (alignTop ? 'flex-start' : alignBottom ? 'flex-end' : 'center')};
  justify-content: center;

  position: relative;
  /* overflow: hidden; */

  transition: height ${({ duration }) => duration}ms ease-out;
`
