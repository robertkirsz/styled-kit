// TODO: check if prop `visible` is used in products

import { withUnit } from 'utils'

const layerStyles = 'position: absolute; top: 0; right: 0; bottom: 0; left: 0;'

export default {
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
  clickable: 'cursor: pointer;',
  noPointerEvents: 'pointer-events: none;',
  fullHeight: 'min-height: 100vh;',
  width: value => `width: ${withUnit(value)};`,
  height: value => `height: ${withUnit(value)};`,
  minWidth: value => `min-width: ${withUnit(value)};`,
  minHeight: value => `min-height: ${withUnit(value)};`,
  maxWidth: value => `max-width: ${withUnit(value)};`,
  maxHeight: value => `max-height: ${withUnit(value)};`,
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
  square: value => `width: ${withUnit(value)}; height: ${withUnit(value)};`,
  background: value => `background: ${value};`,
  backgroundImage: value => `background-image: url(${value});`,
  cover: 'background-size: cover;',
  contain: 'background-size: contain;',
  z: value => `z-index: ${value};`,
  listLeft: value => `> *:not(:first-child) { margin-left: ${withUnit(value)}; }`,
  listRight: value => `> *:not(:last-child) { margin-right: ${withUnit(value)}; }`,
  listTop: value => `> *:not(:first-child) { margin-top: ${withUnit(value)}; }`,
  listBottom: value => `> *:not(:last-child) { margin-bottom: ${withUnit(value)}; }`,
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
