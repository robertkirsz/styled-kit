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
    alignBottom: PropTypes.bool,
    changeSlideCallback: PropTypes.func
  }

  static defaultProps = {
    activeSlide: 0,
    heightProperty: 'clientHeight',
    duration: 300,
    alignTop: false,
    alignBottom: false,
    changeSlideCallback: null
  }

  state = { height: 'auto' }

  slideHeights = []

  timeoutId = null

  componentDidUpdate(prevProps) {
    if (prevProps.activeSlide !== this.props.activeSlide) {
      clearTimeout(this.timeoutId)
      this.tripeUpdate('height', this.slideHeights[prevProps.activeSlide], this.slideHeights[this.props.activeSlide])
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId)
  }

  tripeUpdate = (key, firstValue, secondValue) => {
    this.setState({ [key]: firstValue }, () => {
      this.setState({ [key]: secondValue }, () => {
        this.timeoutId = setTimeout(() => {
          this.setState({ height: 'auto' })
          this.props.changeSlideCallback?.(this.props.activeSlide)
        }, this.props.duration)
      })
    })
  }

  setRef = (node, index) => {
    if (node === null) return
    this.slideHeights[index] = node[this.props.heightProperty]
  }

  takeCareOfChildren = (child, index) => {
    const { activeSlide } = this.props

    const isActive = activeSlide === index
    const isPrevious = index < activeSlide
    const isNext = index > activeSlide

    const style = {
      opacity: isActive ? 1 : 0,
      position: !isActive && 'absolute',
      pointerEvents: !isActive && 'none',
      transform: `translate3d(${isPrevious ? '-100%' : isNext ? '100%' : 0}, 0, 0)`,
      transition: `
        opacity ${this.props.duration}ms,
        transform ${this.props.duration}ms
      `
    }

    const props = { style, ref: node => this.setRef(node, index) }

    return cloneElement(child, props)
  }

  render() {
    const {
      activeSlide,
      heightProperty,
      duration,
      alignTop,
      alignBottom,
      changeSlideCallback,
      children,
      ...props
    } = this.props

    const { height } = this.state

    return (
      <Wrapper duration={duration} alignTop={alignTop} alignBottom={alignBottom} style={{ height }} {...props}>
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
  overflow: hidden;

  transition: height ${({ duration }) => duration}ms;
`
