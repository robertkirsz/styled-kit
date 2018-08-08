import React, { Component, createContext } from 'react'
import PropTypes from 'prop-types'
import { css } from 'styled-components'

import isShallowEqual from '../utils/isShallowEqual'

const getSizeValues = sizes =>
  sizes.reduce(
    (result, size) => ({
      ...result,
      [size.name]: window.matchMedia(`only screen and ${size.value}`).matches
    }),
    {}
  )

const getQueries = sizes =>
  sizes.reduce(
    (result, query) => ({
      ...result,
      [query.name]: (...args) =>
        css`
          @media only screen and ${query.value} {
            ${css(...args)};
          }
        `
    }),
    {}
  )

const { Provider, Consumer } = createContext({})

export default class ScreenSizeProvider extends Component {
  static propTypes = {
    queries: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
      })
    )
  }

  static defaultProps = {
    queries: [
      { name: 'smallOnly', value: '(max-width: 639px)' },
      { name: 'mediumUp', value: '(min-width: 640px)' },
      { name: 'mediumDown', value: '(max-width: 1023px)' },
      { name: 'largeUp', value: '(min-width: 1024px)' }
    ]
  }

  state = {
    sizes: getSizeValues(this.props.queries),
    queries: getQueries(this.props.queries)
  }

  componentDidMount = () => {
    this.props.queries.forEach(size => {
      window
        .matchMedia(`only screen and ${size.value}`)
        .addListener(() => this.setState({ sizes: getSizeValues(this.props.queries) }))
    })
  }

  shouldComponentUpdate = (nextProps, nextState) => !isShallowEqual(this.state.sizes, nextState.sizes)

  render = () => <Provider value={{ sizes: this.state.sizes, queries: this.state.queries }} {...this.props} />
}

export const withSizes = Component => props => (
  <Consumer>{providerValues => <Component {...props} {...providerValues} />}</Consumer>
)
