import styled, { css } from 'styled-components'

import { hasValue, isAlphaNumeric, withUnit, createSpaces, createPosition, createLists, camelToKebab } from '../utils'

const layerStyles = 'position: absolute; top: 0; right: 0; bottom: 0; left: 0;'

const stuff = {
  absolute: 'position: absolute;',
  fixed: 'position: fixed;',
  relative: 'position: relative;',
  flexNone: 'flex: none;',
  wraps: 'flex-wrap: wrap;',
  row: 'flex-direction: row;',
  rowReverse: 'flex-direction: row-reverse;',
  column: 'flex-direction: column;',
  columnReverse: 'flex-direction: column-reverse;',
  justifyStart: 'justify-content: flex-start;',
  justifyEnd: 'justify-content: flex-end;',
  justifyCenter: 'justify-content: center;',
  justifyBetween: 'justify-content: space-between;',
  justifyAround: 'justify-content: space-around;',
  justifyEvenly: 'justify-content: space-evenly;',
  itemsStart: 'align-items: flex-start;',
  itemsEnd: 'align-items: flex-end;',
  itemsCenter: 'align-items: center;',
  itemsBaseline: 'align-items: baseline;',
  itemsStretch: 'align-items: stretch;',
  contentStart: 'align-content: flex-start;',
  contentEnd: 'align-content: flex-end;',
  contentCenter: 'align-content: center;',
  contentBetween: 'align-content: space-between;',
  contentArouns: 'align-content: space-around;',
  contentStretch: 'align-content: stretch;',
  selfAuto: 'align-self: auto;',
  selfStart: 'align-self: flex-start;',
  selfEnd: 'align-self: flex-end;',
  selfCenter: 'align-self: center;',
  selfBaseline: 'align-self: baseline;',
  selfStretch: 'align-self: stretch;',
  listLeft: value => `> *:not(:first-child) { margin-left: ${withUnit(value)}; }`,
  listRight: value => `> *:not(:last-child) { margin-right: ${withUnit(value)}; }`,
  listTop: value => `> *:not(:first-child) { margin-top: ${withUnit(value)}; }`,
  listBottom: value => `> *:not(:last-child) { margin-bottom: ${withUnit(value)}; }`
}

function doMediaQueriesStuff(props = {}) {
  if (!props.theme) return
  if (!props.theme.styledKitMediaQueries) return

  const queryNames = Object.keys(props.theme.styledKitMediaQueries)

  if (!queryNames.length) return

  const queryNameToValuesMap = queryNames.reduce((all, query) => {
    const declaration = props[query]

    if (!declaration) return all

    const allDeclarations =
      typeof declaration === 'string'
        ? declaration
        : Object.keys(props[query]).reduce((all, property) => {
            const value = props[query][property]
            let foo = stuff[property]

            if (!foo) return `${all}${camelToKebab(property)}:${value};`

            const declaration = typeof foo === 'function' ? foo(value) : foo

            return `${all}${declaration}`
          }, '')

    return { ...all, [query]: allDeclarations }
  }, {})

  const cssString = queryNames.reduce((all, query) => {
    if (!queryNameToValuesMap[query]) return all

    return `${all}@media ${props.theme.styledKitMediaQueries[query]} {${queryNameToValuesMap[query]}}`
  }, '')

  return cssString
}

// prettier-ignore
export default styled.div`
  display: ${props => {
    if (props.inline) {
      if (props.block) return 'inline-block'
      else if (props.grid) return 'inline-grid'
      else if (props.flex === true) return 'inline-flex'
      else return 'inline'
    } else {
      if (props.flex === true) return 'flex'
      if (props.block) return 'block'
      if (props.grid) return 'grid'
      if (props.static) return 'static'
      return 'flex'
    }
  }};

  ${props => {
    if (!props.block || !(props.inline && !props.flex)) {
      let styles = ''

      if (props.row) styles += 'flex-direction: row;'
      if (props.rowReverse) styles += 'flex-direction: row-reverse;'
      if (props.column) styles += 'flex-direction: column;'
      if (props.columnReverse) styles += 'flex-direction: column-reverse;'

      if (props.justifyContent) styles += `justify-content: ${props.justifyContent};`
      if (props.justifyStart) styles += 'justify-content: flex-start;'
      if (props.justifyEnd) styles += 'justify-content: flex-end;'
      if (props.justifyCenter) styles += 'justify-content: center;'
      if (props.justifyBetween) styles += 'justify-content: space-between;'
      if (props.justifyAround) styles += 'justify-content: space-around;'
      if (props.justifyEvenly) styles += 'justify-content: space-evenly;'

      if (props.alignItems) styles += `align-items: ${props.alignItems};`
      if (props.itemsStart) styles += 'align-items: flex-start;'
      if (props.itemsEnd) styles += 'align-items: flex-end;'
      if (props.itemsCenter) styles += 'align-items: center;'
      if (props.itemsBaseline) styles += 'align-items: baseline;'
      if (props.itemsStretch) styles += 'align-items: stretch;'

      if (props.alignContent) styles += `align-content: ${props.alignContent};`
      if (props.contentStart) styles += 'align-content: flex-start;'
      if (props.contentEnd) styles += 'align-content: flex-end;'
      if (props.contentCenter) styles += 'align-content: center;'
      if (props.contentBetween) styles += 'align-content: space-between;'
      if (props.contentArouns) styles += 'align-content: space-around;'
      if (props.contentStretch) styles += 'align-content: stretch;'

      if (props.alignSelf) styles += `align-self: ${props.alignSelf};`
      if (props.selfAuto) styles += 'align-self: auto;'
      if (props.selfStart) styles += 'align-self: flex-start;'
      if (props.selfEnd) styles += 'align-self: flex-end;'
      if (props.selfCenter) styles += 'align-self: center;'
      if (props.selfBaseline) styles += 'align-self: baseline;'
      if (props.selfStretch) styles += 'align-self: stretch;'

      return styles
    }
  }}

  ${props => props.wraps && 'flex-wrap: wrap;'}

  ${({ area }) => typeof area === 'string' && `grid-area: ${area};`}

  ${({ order }) => isAlphaNumeric(order) && `order: ${order};`}

  ${({ flexNone, flex }) => {
    if (flexNone) return 'flex: none;'
    if (isAlphaNumeric(flex)) return css`flex: ${flex};`
  }}

  ${({ absolute, fixed, relative }) => {
    if (absolute) return 'position: absolute;'
    if (fixed) return 'position: fixed;'
    if (relative) return 'position: relative;'
  }}

  ${createPosition}

  ${({ width }) => hasValue(width) && css`width: ${withUnit(width)};`}
  ${({ height }) => hasValue(height) && css`height: ${withUnit(height)};`}
  ${({ minWidth }) => hasValue(minWidth) && css`min-width: ${withUnit(minWidth)};`}
  ${({ minHeight }) => hasValue(minHeight) && css`min-height: ${withUnit(minHeight)};`}
  ${({ maxWidth }) => hasValue(maxWidth) && css`max-width: ${withUnit(maxWidth)};`}
  ${({ maxHeight }) => hasValue(maxHeight) && css`max-height: ${withUnit(maxHeight)};`}

  ${({ fullHeight }) => fullHeight && css`min-height: 100vh;`}

  ${({ margin, m }) => (margin || m) && css`margin: ${withUnit(margin || m)};`}
  ${createSpaces('margin')}

  ${({ padding, p }) => (padding || p) && css`padding: ${withUnit(padding || p)};`}
  ${createSpaces('padding')}

  ${({ z }) => isAlphaNumeric(z) && css`z-index: ${z};`}

  ${createLists}

  ${({ layer }) => layer && layerStyles}
  ${({ square }) => square && css`width: ${withUnit(square)}; height: ${withUnit(square)};`}
  ${({ clickable }) => clickable && 'cursor: pointer;'}
  ${({ noPointerEvents }) => noPointerEvents && css`pointer-events: none;`}

  ${({ background }) => background && css`background: ${background};`}
  ${({ backgroundImage }) => backgroundImage && css`background-image: url(${backgroundImage});`}
  ${({ cover, contain }) => (cover || contain) && css`background-size: ${cover ? 'cover' : 'contain'};`}

  ${props => props.overlay && css`
    position: ${(props.absolute && 'absolute') || 'relative'};

    &::after {
      content: "";
      ${layerStyles}
      background: ${props.overlay};
      opacity: 0.2;
      pointer-events: none;
    }
  `}

  ${props => props.visible !== undefined && css`
    transition: opacity 0.3s;
    ${props.visible === false && 'opacity: 0;'}
  `}

  ${doMediaQueriesStuff}
`
