import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

export default class HeightTransition extends Component {
  static propTypes = {
    isActive: PropTypes.bool,
    style: PropTypes.shape({}),
    contentStyle: PropTypes.shape({}),
    children: PropTypes.node,
    heightProperty: PropTypes.string,
    timeout: PropTypes.number
  }

  static defaultProps = {
    heightProperty: 'clientHeight',
    timeout: 500
  }

  childrenRef = createRef()

  state = {
    height: this.props.isActive ? 'auto' : 0,
    isAnimating: false
  }

  getSnapshotBeforeUpdate = () => this.getChildrenHeight()

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.isActive !== this.props.isActive) {
      this.doubleUpdate('height', snapshot, this.getChildrenHeight())
    }

    if (!this.props.isActive && prevProps.isActive) {
      this.doubleUpdate('height', snapshot, 0)
    }
  }

  handleTransitionEnd = () => this.setState(({ height }) => ({ height: !height ? 0 : 'auto', isAnimating: false }))

  getChildrenHeight = () => this.childrenRef.current[this.props.heightProperty]

  doubleUpdate = (key, firstValue, secondValue) =>
    this.setState({ [key]: firstValue, isAnimating: true }, () => {
      this.setState({ [key]: secondValue })
      setTimeout(() => this.handleTransitionEnd(), this.props.timeout)
    })

  render() {
    const { children, style, contentStyle, ...props } = this.props
    const { height, isAnimating } = this.state

    return (
      <Wrapper {...props} isAnimating={isAnimating} style={{ ...style, height }}>
        <div ref={this.childrenRef} style={contentStyle}>
          {children}
        </div>
      </Wrapper>
    )
  }
}

// prettier-ignore
const Wrapper = styled.div`
  ${props => css`
    opacity: ${props.isActive ? 1 : 0};
    transition: all ${props.timeout}ms cubic-bezier(0.23, 1, 0.32, 1);
    background: pink;
    ${(!props.isActive || props.isAnimating) && 'overflow: hidden;'}

    > div {
      ${!props.isActive && 'pointer-events: none;'}
    }
  `}
`
