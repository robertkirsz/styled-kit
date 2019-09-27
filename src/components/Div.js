import styled, { css } from 'styled-components'

import { hasValue, isAlphaNumeric, withUnit, createSpaces, createPosition, createLists, camelToKebab } from '../utils'

const layerStyles = 'position: absolute; top: 0; right: 0; bottom: 0; left: 0;'

const stuff = {
  absolute: 'position: absolute;',
  fixed: 'position: fixed;',
  relative: 'position: relative;',
  flexNone: 'flex: none;',
  row: 'flex-direction: row;',
  rowReverse: 'flex-direction: row-reverse;',
  column: 'flex-direction: column;',
  columnReverse: 'flex-direction: column-reverse;',
  wraps: 'flex-wrap: wrap;',
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
  layer: layerStyles,
  hide: 'display: none;',
  top: value => `top: ${withUnit(value)};`,
  right: value => `right: ${withUnit(value)};`,
  bottom: value => `bottom: ${withUnit(value)};`,
  left: value => `left: ${withUnit(value)};`,
  margin: value => `margin: ${withUnit(value)};`,
  marginTop: value => `margin-top: ${withUnit(value)};`,
  marginRight: value => `margin-right: ${withUnit(value)};`,
  marginBottom: value => `margin-bottom: ${withUnit(value)};`,
  marginLeft: value => `margin-left: ${withUnit(value)};`,
  padding: value => `padding: ${withUnit(value)};`,
  paddingTop: value => `padding-top: ${withUnit(value)};`,
  paddingRight: value => `padding-right: ${withUnit(value)};`,
  paddingBottom: value => `padding-bottom: ${withUnit(value)};`,
  paddingLeft: value => `padding-left: ${withUnit(value)};`,
  listLeft: value => `> *:not(:first-child) { margin-left: ${withUnit(value)}; }`,
  listRight: value => `> *:not(:last-child) { margin-right: ${withUnit(value)}; }`,
  listTop: value => `> *:not(:first-child) { margin-top: ${withUnit(value)}; }`,
  listBottom: value => `> *:not(:last-child) { margin-bottom: ${withUnit(value)}; }`,
  clickable: 'cursor: pointer;',
  noPointerEvents: 'pointer-events: none;'
}

function doMediaQueriesStuff(props = {}) {
  try {
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
  } catch {}
}

function doStuff({ onDone, ...props }) {
  const a = Object.keys(props).reduce((css, prop) => {
    if (!stuff[prop]) return css
    try {
      return css + stuff[prop](props[prop])
    } catch {
      return css + stuff[prop]
    }
  }, '')

  if (onDone) {
    onDone(a)
  }

  return a
}

// prettier-ignore
export default styled.div`
  ${doStuff}

  display: ${({ inline }) => inline ? 'inline-flex' : 'flex'};

  ${props => {
    let styles = ''

    if (props.flexNone) styles += stuff.flexNone

    /* Move to stuff? */
    if (isAlphaNumeric(props.flex)) styles += `flex: ${props.flex};`
    if (isAlphaNumeric(props.order)) styles += `order: ${props.order};`

    if (props.row) styles += stuff.row
    if (props.rowReverse) styles += stuff.rowReverse
    if (props.column) styles += stuff.column
    if (props.columnReverse) styles += stuff.columnReverse

    if (props.justifyStart) styles += stuff.justifyStart
    if (props.justifyEnd) styles += stuff.justifyEnd
    if (props.justifyCenter) styles += stuff.justifyCenter
    if (props.justifyBetween) styles += stuff.justifyBetween
    if (props.justifyAround) styles += stuff.justifyAround
    if (props.justifyEvenly) styles += stuff.justifyEvenly

    if (props.itemsStart) styles += stuff.itemsStart
    if (props.itemsEnd) styles += stuff.itemsEnd
    if (props.itemsCenter) styles += stuff.itemsCenter
    if (props.itemsBaseline) styles += stuff.itemsBaseline
    if (props.itemsStretch) styles += stuff.itemsStretch

    if (props.contentStart) styles += stuff.contentStart
    if (props.contentEnd) styles += stuff.contentEnd
    if (props.contentCenter) styles += stuff.contentCenter
    if (props.contentBetween) styles += stuff.contentBetween
    if (props.contentArouns) styles += stuff.contentArouns
    if (props.contentStretch) styles += stuff.contentStretch

    if (props.selfAuto) styles += stuff.selfAuto
    if (props.selfStart) styles += stuff.selfStart
    if (props.selfEnd) styles += stuff.selfEnd
    if (props.selfCenter) styles += stuff.selfCenter
    if (props.selfBaseline) styles += stuff.selfBaseline
    if (props.selfStretch) styles += stuff.selfStretch

    if (props.wraps) styles += stuff.wraps
    if (props.clickable) styles += stuff.clickable
    if (props.noPointerEvents) styles += stuff.noPointerEvents

    if (props.absolute) styles += stuff.absolute
    if (props.fixed) styles += stuff.fixed
    if (props.relative) styles += stuff.relative

    if (props.layer) styles += stuff.layer
    if (props.hide) styles += stuff.hide

    return styles
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

  ${({ square }) => square && css`width: ${withUnit(square)}; height: ${withUnit(square)};`}

  ${({ background }) => background && css`background: ${background};`}
  ${({ backgroundImage }) => backgroundImage && css`background-image: url(${backgroundImage});`}
  ${({ cover, contain }) => (cover || contain) && css`background-size: ${cover ? 'cover' : 'contain'};`}

  ${({ overlay, absolute }) => overlay && css`
    position: ${(absolute && 'absolute') || 'relative'};

    &::after {
      content: "";
      ${layerStyles}
      background: ${overlay};
      opacity: 0.2;
      pointer-events: none;
    }
  `}

  ${({ visible }) => visible !== undefined && css`
    transition: opacity 0.3s;
    ${visible === false && 'opacity: 0;'}
  `}

  ${doMediaQueriesStuff}
`
