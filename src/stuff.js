// TODO: check if prop `visible` is used in products

import { withUnit } from 'utils'

const layerStyles = 'position: absolute; top: 0; right: 0; bottom: 0; left: 0;'

export default {
  // flex-direction
  row: use => use && 'flex-direction: row;',
  rowReverse: use => use && 'flex-direction: row-reverse;',
  column: use => use && 'flex-direction: column;',
  columnReverse: use => use && 'flex-direction: column-reverse;',
  wraps: use => use && 'flex-wrap: wrap;',
  // justify-content
  justifyStart: use => use && 'justify-content: flex-start;',
  justifyEnd: use => use && 'justify-content: flex-end;',
  justifyCenter: use => use && 'justify-content: center;',
  justifyBetween: use => use && 'justify-content: space-between;',
  justifyAround: use => use && 'justify-content: space-around;',
  justifyEvenly: use => use && 'justify-content: space-evenly;',
  // align-items
  itemsStart: use => use && 'align-items: flex-start;',
  itemsEnd: use => use && 'align-items: flex-end;',
  itemsCenter: use => use && 'align-items: center;',
  itemsBaseline: use => use && 'align-items: baseline;',
  itemsStretch: use => use && 'align-items: stretch;',
  // align-content
  contentStart: use => use && 'align-content: flex-start;',
  contentEnd: use => use && 'align-content: flex-end;',
  contentCenter: use => use && 'align-content: center;',
  contentBetween: use => use && 'align-content: space-between;',
  contentAround: use => use && 'align-content: space-around;',
  contentStretch: use => use && 'align-content: stretch;',
  // Self-positioning
  flex: value => `flex: ${value};`,
  flexNone: use => use && 'flex: none;',
  selfAuto: use => use && 'align-self: auto;',
  selfStart: use => use && 'align-self: flex-start;',
  selfEnd: use => use && 'align-self: flex-end;',
  selfCenter: use => use && 'align-self: center;',
  selfBaseline: use => use && 'align-self: baseline;',
  selfStretch: use => use && 'align-self: stretch;',
  // Size
  width: value => `width: ${withUnit(value)};`,
  height: value => `height: ${withUnit(value)};`,
  minWidth: value => `min-width: ${withUnit(value)};`,
  minHeight: value => `min-height: ${withUnit(value)};`,
  maxWidth: value => `max-width: ${withUnit(value)};`,
  maxHeight: value => `max-height: ${withUnit(value)};`,
  // Margin
  margin: value => `margin: ${withUnit(value)};`,
  marginTop: value => `margin-top: ${withUnit(value)};`,
  marginRight: value => `margin-right: ${withUnit(value)};`,
  marginBottom: value => `margin-bottom: ${withUnit(value)};`,
  marginLeft: value => `margin-left: ${withUnit(value)};`,
  mTop: value => `margin-top: ${withUnit(value)};`,
  mRight: value => `margin-right: ${withUnit(value)};`,
  mBottom: value => `margin-bottom: ${withUnit(value)};`,
  mLeft: value => `margin-left: ${withUnit(value)};`,
  // Padding
  padding: value => `padding: ${withUnit(value)};`,
  paddingTop: value => `padding-top: ${withUnit(value)};`,
  paddingRight: value => `padding-right: ${withUnit(value)};`,
  paddingBottom: value => `padding-bottom: ${withUnit(value)};`,
  paddingLeft: value => `padding-left: ${withUnit(value)};`,
  pTop: value => `padding-top: ${withUnit(value)};`,
  pRight: value => `padding-right: ${withUnit(value)};`,
  pBottom: value => `padding-bottom: ${withUnit(value)};`,
  pLeft: value => `padding-left: ${withUnit(value)};`,
  // Background
  background: value => `background: ${value};`,
  backgroundImage: value => `background-image: url(${value});`,
  cover: use => use && 'background-size: cover;',
  contain: use => use && 'background-size: contain;',
  // Position
  relative: use => use && 'position: relative;',
  absolute: use => use && 'position: absolute;',
  fixed: use => use && 'position: fixed;',
  sticky: use => use && 'position: sticky;',
  top: value => `top: ${withUnit(value)};`,
  right: value => `right: ${withUnit(value)};`,
  bottom: value => `bottom: ${withUnit(value)};`,
  left: value => `left: ${withUnit(value)};`,
  z: value => `z-index: ${value};`,
  // Lists
  listLeft: value => `> *:not(:first-child) { margin-left: ${withUnit(value === true ? 8 : value)}; }`,
  listRight: value => `> *:not(:last-child) { margin-right: ${withUnit(value === true ? 8 : value)}; }`,
  listTop: value => `> *:not(:first-child) { margin-top: ${withUnit(value === true ? 8 : value)}; }`,
  listBottom: value => `> *:not(:last-child) { margin-bottom: ${withUnit(value === true ? 8 : value)}; }`,
  // Helpers
  layer: use => use && layerStyles,
  square: value => value !== '' && `width: ${withUnit(value)}; height: ${withUnit(value)};`,
  fullHeight: use => use && 'min-height: 100vh;',
  hide: use => use && 'display: none;',
  clickable: use => use && 'cursor: pointer;',
  noPointerEvents: use => use && 'pointer-events: none;',
  overlay: (value, props) => `
    position: ${(props.absolute && 'absolute') || 'relative'};

    &::after {
      content: "";
      ${layerStyles}
      background: ${value};
      opacity: 0.2;
      pointer-events: none;
    }
  `
}
