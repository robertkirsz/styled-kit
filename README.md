# styled-kit

This is a styled-components component kit that I'm using in various personal and commercial projects

## `<Div />`

`import Div from 'styled-kit/Div'`

The Div has `display: flex;` by default. You can overwrite it by passing `block`, `grid` or `inline` props. `inline` can be used together with other props, so `<Div block inline />` will give you `display: inline-block;`

### Display

To set `flex-direction` you can use `row`, `rowReverse`, `column`, or `columnReverse` props. The default is `row`, so no need to need to specify it.

### Flex

Use `wraps` to change the default value of `flex-wrap: no-wrap;`

To change `justify-content` you can pass a string value to `justifyContent` or use one of these boolean props: `justifyStart` (default), `justifyEnd`, `justifyCenter`, `justifyBetween`, `justifyAround`, or `justifyEvenly`

Similarly, for `align-items` you can pass a string to `alignItems` prop or use `itemsStart`, `itemsEnd`, `itemsCenter`, `itemsBaseline`, or `itemsStretch` (default)

And for `align-content` - use a string value as `alignContent` props or use on of predefined `contentStart`, `contentEnd`, `contentCenter`, `contentBetween`, `contentArouns`, `contentStretch` (default)

For changing `flex` value just pass whatever you want to `flex` props or use `flexNone` to get `flex: none;`. Use `order` to assign it a value.

### Grid

If you feel adventurous and use `display: grid;` instead of flex, you can pass in area names to the `area` prop. More grid-specific helpers to come in the future.

### Size

To change the size of the Div, you can pass numbers or string to the following props: `width`, `height`, `minWidth`, `minHeight`, `maxWidth`, `maxHeight`

Numeric values will be transformed to pixels, so `<Div height={100} />` will get `height: 100px;`.

If you want a Div to be a square, you can pass a value to the `square` prop and it will be applied to both `width` and `height` attributes of the element.

### Position

Use `absolute`, `fixed` or `relative` to set the `position` attribute. Then you can pass a string or numeric values to `top`, `right`, `bottom` and `left` props.

If you want the Div to work as a layer, you can set the `layer` prop to be `true`. This will position the element absolutely and set `0` to each of the positioning attributes. Then use `z` prop to set `z-index`.

For margins and padding, you can pass strings or numbers to `margin` and `padding` props, or set them more specifically using `pTop`, `pRight`, `pBottom`, `pLeft` for paddings and `mTop`, `mRight`, `mBottom`, `mLeft` for margins.

### Children position

You can add margins to Div's children. There are four props for that: `listTop`, `listRight`, `listBottom` and `listLeft.` For example - setting `<Div listLeft={16} />` will add `margin-left: 16px;` to each of Div's children. Good for quickly adding some space between nested elements.

### Background

Whatever you pass to `background` and `backgroundImage` props will be used for `background` and `background-image` respectively. You can use `cover` and `contain` props to quickly assign those values to `background-size`.

### Misc stuff

You can pass a color string value to the `overlay` prop and that will create a colored overlay over the Div. It's useful for debugging layout issues. Note that it's using `after` pseudo-element, so it may not work as expected if you already use it in the element.

`clickable` props will set `cursor: pointer;` and `noPointerEvents` results in `pointer-events: none;`.

`visible` prop is a quick way to hide the Div using an opacity transition. If you set it to false, the opacity attribute will be set to `0`.

## `<HeightTransition />`

`import HeightTransition from 'styled-kit/HeightTransition'`

Use it to wrap an element with it that you want to slide-in when HeightTransition's `isActive` prop changes to `true`.

There are some issues with animation jumping if HeightTransition's direct child has some margins applied to it. Try to use padding instead, or wrap the child with a div.
