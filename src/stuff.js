import withUnit from 'utils/withUnit'

const layerStyles = 'position: absolute; top: 0; right: 0; bottom: 0; left: 0;'

export default {
  // flex-direction
  row: 'flex-direction: row;',
  rowReverse: 'flex-direction: row-reverse;',
  column: 'flex-direction: column;',
  columnReverse: 'flex-direction: column-reverse;',
  wraps: 'flex-wrap: wrap;',
  // justify-content
  justifyStart: 'justify-content: flex-start;',
  justifyEnd: 'justify-content: flex-end;',
  justifyCenter: 'justify-content: center;',
  justifyBetween: 'justify-content: space-between;',
  justifyAround: 'justify-content: space-around;',
  justifyEvenly: 'justify-content: space-evenly;',
  // align-items
  itemsStart: 'align-items: flex-start;',
  itemsEnd: 'align-items: flex-end;',
  itemsCenter: 'align-items: center;',
  itemsBaseline: 'align-items: baseline;',
  itemsStretch: 'align-items: stretch;',
  // align-content
  contentStart: 'align-content: flex-start;',
  contentEnd: 'align-content: flex-end;',
  contentCenter: 'align-content: center;',
  contentBetween: 'align-content: space-between;',
  contentAround: 'align-content: space-around;',
  contentStretch: 'align-content: stretch;',
  // Self-positioning
  flex: value => `flex: ${value};`,
  flexNone: 'flex: none;',
  selfAuto: 'align-self: auto;',
  selfStart: 'align-self: flex-start;',
  selfEnd: 'align-self: flex-end;',
  selfCenter: 'align-self: center;',
  selfBaseline: 'align-self: baseline;',
  selfStretch: 'align-self: stretch;',
  // Size
  /**/ width: value => `width: ${withUnit(value)};`,
  /**/ height: value => `height: ${withUnit(value)};`,
  /**/ minWidth: value => `min-width: ${withUnit(value)};`,
  /**/ minHeight: value => `min-height: ${withUnit(value)};`,
  /**/ maxWidth: value => `max-width: ${withUnit(value)};`,
  /**/ maxHeight: value => `max-height: ${withUnit(value)};`,
  // Margin
  /**/ margin: value => `margin: ${withUnit(value)};`,
  /**/ marginTop: value => `margin-top: ${withUnit(value)};`,
  /**/ marginRight: value => `margin-right: ${withUnit(value)};`,
  /**/ marginBottom: value => `margin-bottom: ${withUnit(value)};`,
  /**/ marginLeft: value => `margin-left: ${withUnit(value)};`,
  mTop: value => `margin-top: ${withUnit(value)};`,
  mRight: value => `margin-right: ${withUnit(value)};`,
  mBottom: value => `margin-bottom: ${withUnit(value)};`,
  mLeft: value => `margin-left: ${withUnit(value)};`,
  // Padding
  /**/ padding: value => `padding: ${withUnit(value)};`,
  /**/ paddingTop: value => `padding-top: ${withUnit(value)};`,
  /**/ paddingRight: value => `padding-right: ${withUnit(value)};`,
  /**/ paddingBottom: value => `padding-bottom: ${withUnit(value)};`,
  /**/ paddingLeft: value => `padding-left: ${withUnit(value)};`,
  pTop: value => `padding-top: ${withUnit(value)};`,
  pRight: value => `padding-right: ${withUnit(value)};`,
  pBottom: value => `padding-bottom: ${withUnit(value)};`,
  pLeft: value => `padding-left: ${withUnit(value)};`,
  // Background
  background: value => `background: ${value};`,
  backgroundImage: value => `background-image: url(${value});`,
  cover: 'background-size: cover;',
  contain: 'background-size: contain;',
  // Border
  /**/ border: value => `border: ${value};`,
  /**/ radius: value => `border-radius: ${withUnit(value)};`,
  // Position
  relative: 'position: relative;',
  absolute: 'position: absolute;',
  fixed: 'position: fixed;',
  sticky: 'position: sticky;',
  top: value => `top: ${withUnit(value)};`,
  right: value => `right: ${withUnit(value)};`,
  bottom: value => `bottom: ${withUnit(value)};`,
  left: value => `left: ${withUnit(value)};`,
  z: value => `z-index: ${value};`,
  // Text
  /**/ color: value => `color: ${value};`,
  // Lists
  listLeft: value => `> *:not(:first-child) { margin-left: ${withUnit(value === true ? 8 : value)}; }`,
  listRight: value => `> *:not(:last-child) { margin-right: ${withUnit(value === true ? 8 : value)}; }`,
  listTop: value => `> *:not(:first-child) { margin-top: ${withUnit(value === true ? 8 : value)}; }`,
  listBottom: value => `> *:not(:last-child) { margin-bottom: ${withUnit(value === true ? 8 : value)}; }`,
  // Helpers
  layer: layerStyles,
  square: value => value !== '' && `width: ${withUnit(value)}; height: ${withUnit(value)};`,
  fullHeight: 'min-height: 100vh;',
  hide: 'display: none;',
  circle: 'border-radius: 50%;',
  clickable: 'cursor: pointer;',
  noPointerEvents: 'pointer-events: none;',
  overlay: (value = 'red', props) => `
  position: ${(props.absolute && 'absolute') || 'relative'};

  &::after {
    content: "";
    ${layerStyles}
    background: ${value};
    opacity: 0.2;
    pointer-events: none;
  }`
}
