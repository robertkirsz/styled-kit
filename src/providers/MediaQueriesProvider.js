import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css, ThemeProvider } from 'styled-components'

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

export default class MediaQueriesProvider extends Component {
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
    queries: getQueries(this.props.queries)
  }

  render = () => <ThemeProvider theme={{ queries: this.state.queries }} {...this.props} />
}
