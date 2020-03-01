# styled-kit

## Installation

```bash
npm install styled-kit
```

## Usage


```js
import Div from 'styled-kit/Div'

<Div column listTop={24}>
  <h1>Hello</h1>
  <h2>Hello</h2>
</Div>
```

Div is a helper wrapper component that maks it ease to postion it's children using flex attributes.

## Live demo

#### 🚧 In progress

## Available props

### Flex properties

| Prop | CSS |
| --- | --- |
| `row` | `flex-direction: row;` |
| `rowReverse` | `flex-direction: row-reverse;` |
| `column` | `flex-direction: column;` |
| `columnReverse` | `flex-direction: column-reverse;` |
| `wraps` | `flex-wrap: wrap;` |
| `justifyStart` | `justify-content: flex-start;` |
| `justifyEnd` | `justify-content: flex-end;` |
| `justifyCenter` | `justify-content: center;` |
| `justifyBetween` | `justify-content: space-between;` |
| `justifyAround` | `justify-content: space-around;` |
| `justifyEvenly` | `justify-content: space-evenly;` |
| `itemsStart` | `align-items: flex-start;` |
| `itemsEnd` | `align-items: flex-end;` |
| `itemsCenter` | `align-items: center;` |
| `itemsBaseline` | `align-items: baseline;` |
| `itemsStretch` | `align-items: stretch;` |
| `contentStart` | `align-content: flex-start;` |
| `contentEnd` | `align-content: flex-end;` |
| `contentCenter` | `align-content: center;` |
| `contentBetween` | `align-content: space-between;` |
| `contentAround` | `align-content: space-around;` |
| `contentStretch` | `align-content: stretch;` |

### Self flex properties

| Prop | CSS |
| --- | --- |
| `flex={X}` | `flex: X;` |
| `flexNone` | `flex: none;` |
| `selfAuto` | `align-self: auto;` |
| `selfStart` | `align-self: flex-start;` |
| `selfEnd` | `align-self: flex-end;` |
| `selfCenter` | `align-self: center;` |
| `selfBaseline` | `align-self: baseline;` |
| `selfStretch` | `align-self: stretch;` |

Props that looks like `name={X}` accepts value that either number or string. If it's number and, it will be converted to pixel for props that require them, so:

`width={100}`: `width: 100px;`
`height="100"`: `height: 100%;`
`flex={5}`: `flex: 5;`

### Size

| Prop | CSS |
| --- | --- |
| `width={X}` | `width: X;` |
| `height={X}` | `height: X;` |
| `minWidth={X}` | `min-width: X;` |
| `minHeight={X}` | `min-height: X;` |
| `maxWidth={X}` | `max-width: X;` |
| `maxHeight={X}` | `max-height: X;` |
| `radius={X}` | `border-radius: X;` |

### Space

| Prop | CSS |
| --- | --- |
| `margin={X}` | `margin: X;` |
| `mTop={X}` | `margin-top: X;` |
| `mRight={X}` | `margin-right: X;` |
| `mBottom={X}` | `margin-bottom: X;` |
| `mLeft={X}` | `margin-left: X;` |
| `padding={X}` | `padding: X;` |
| `pTop={X}` | `padding-top: X;` |
| `pRight={X}` | `padding-right: X;` |
| `pBottom={X}` | `padding-bottom: X;` |
| `pLeft={X}` | `padding-left: X;` |

Instead of using `pTop` or `mLeft`, you can also use unabreiviated `paddingTop`, `marginLeft`, and so on.

### Position

| Prop | CSS |
| --- | --- |
| `relative` | `position: relative;` |
| `absolute` | `position: absolute;` |
| `fixed` | `position: fixed;` |
| `sticky` | `position: sticky;` |
| `top={X}` | `top: {X};` |
| `right={X}` | `right: {X};` |
| `bottom={X}` | `bottom: {X};` |
| `left={X}` | `left: {X};` |
| `z={X}` | `z-index: {X};` |

### Lists

Add margin to every child except first or last one, depending on chosen direction. Used to add space between child items.

| Prop | CSS |
| --- | --- |
| `listLeft={X}` | `> *:not(:first-child) { margin-left: {X}; }` |
| `listRight={X}` | `> *:not(:last-child) { margin-right: {X}; }` |
| `listTop={X}` | `> *:not(:first-child) { margin-top: {X}; }` |
| `listBottom={X}` | `> *:not(:last-child) { margin-bottom: {X}; }` |

X is 8px by default

### Helpers

| Prop | CSS |
| --- | --- |
| `background={X}` | `background: ${value};` |
| `backgroundImage={URL}` | `background-image: url({URL});` |
| `cover` | `background-size: cover;` |
| `contain` | `background-size: contain;` |
| `layer` | `position: absolute; top: 0; right: 0; bottom: 0; left: 0;` |
| `square={}` | `width: {X}; height: {X};` |
| `circle` | `border-radius: 50%;` |
| `fullHeight` | `min-height: 100vh;` |
| `hide` | `display: none;` |
| `clickable` | `cursor: pointer;` |
| `noPointerEvents` | `pointer-events: none;` |
| `overlay` | Creates a semi-transparent red overlay over a `<Div />`, may come in useful whe debugging layout. Accept a string with color name if you want something other than red.

## Media queries

You can use CSS media queries with `<Div />`

First you need to import styled-components's `ThemeProvider` and pass it a theme with `styledKitMediaQueries` key where you put your media queries. Query needs to have a name and a valid value. Here's an example:

```js
import { ThemeProvider } from 'styled-components'
import { createQueries } from 'styled-kit/Div'

const styledKitMediaQueries = createQueries({
  mobile: '(max-width: 767px)',
  desktop: '(min-width: 768px)'
})

function App() {
  return (
    <ThemeProvider theme={{ styledKitMediaQueries }}>
      <Div mobile="color: pink;" desktop="color: powderblue;">
        Hello!
      </Div>
    </ThemeProvider>
  )
}
```

You can name toyr queries however you want. In this example, they're called "mobile" and "desktop", and now all Divs can accept props of same names.

`<Div desktop="flex-direction: column;" />` Simple CSS string
`<Div desktop={{ flexDirection: 'column' }} />` Object notation (the same that `style` prop accepts)
`<Div desktop={{ column: true }} />` Object notation unsing Div's properties
`<Div desktop={['column']} />` Array notation, works with Div's boolean properties only

All results in the same `flex-direction: column;` CSS getting attached to `<Div />` on screens at least 768px wide

Enjoy! 💙

[![npm version](https://img.shields.io/npm/v/styled-kit.svg?color=blue)](https://www.npmjs.com/package/styled-kit) ![Bundle size](https://img.shields.io/bundlephobia/min/styled-kit.svg?color=blue) [![GitHub license](https://img.shields.io/npm/l/styled-kit.svg?color=blue)](https://github.com/robertkirsz/styled-kit/blob/master/LICENSE)
