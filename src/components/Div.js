import styled, { css } from 'styled-components'

import { isAlphaNumeric, withUnit, createSpaces, createPosition, createLists } from '../utils'

const layerStyles = 'position: absolute; top: 0; right: 0; bottom: 0; left: 0;'

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

  ${({ width }) => width && css`width: ${withUnit(width)};`}
  ${({ height }) => height && css`height: ${withUnit(height)};`}
  ${({ minWidth }) => minWidth && css`min-width: ${withUnit(minWidth)};`}
  ${({ minHeight }) => minHeight && css`min-height: ${withUnit(minHeight)};`}
  ${({ maxWidth }) => maxWidth && css`max-width: ${withUnit(maxWidth)};`}
  ${({ maxHeight }) => maxHeight && css`max-height: ${withUnit(maxHeight)};`}

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
`
