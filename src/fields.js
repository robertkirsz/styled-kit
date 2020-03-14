import parseText from 'utils/parseText'

export default [
  {
    name: 'flex-direction',
    type: 'select',
    initialValue: '',
    options: [
      { value: 'row', label: 'row' },
      { value: 'rowReverse', label: 'row-reverse' },
      { value: 'column', label: 'column' },
      { value: 'columnReverse', label: 'column-reverse' }
    ]
  },
  { name: 'wraps', type: 'checkbox', displayName: 'flex-wrap', initialValue: false },
  { name: 'width', type: 'text', initialValue: 300, parser: parseText },
  { name: 'height', type: 'text', initialValue: 300, parser: parseText },
  { name: 'margin', type: 'text', initialValue: '', parser: parseText },
  { name: 'padding', type: 'text', initialValue: 8, parser: parseText },
  { name: 'background', type: 'text', initialValue: '' },
  {
    name: 'justify-content',
    type: 'select',
    initialValue: '',
    options: [
      { value: 'justifyStart', label: 'flex-start' },
      { value: 'justifyEnd', label: 'flex-end' },
      { value: 'justifyCenter', label: 'center' },
      { value: 'justifyBetween', label: 'space-between' },
      { value: 'justifyAround', label: 'space-around' },
      { value: 'justifyEvenly', label: 'space-evenly' }
    ]
  },
  {
    name: 'align-items',
    type: 'select',
    initialValue: '',
    options: [
      { value: 'itemsStart', label: 'flex-start' },
      { value: 'itemsEnd', label: 'flex-end' },
      { value: 'itemsCenter', label: 'center' },
      { value: 'itemsBaseline', label: 'baseline' },
      { value: 'itemsStretch', label: 'stretch' }
    ]
  },
  {
    name: 'align-content',
    type: 'select',
    initialValue: '',
    options: [
      { value: 'contentStart', label: 'flex-start' },
      { value: 'contentEnd', label: 'flex-end' },
      { value: 'contentCenter', label: 'center' },
      { value: 'contentBetween', label: 'space-between' },
      { value: 'contentAround', label: 'space-around' },
      { value: 'contentStretch', label: 'stretch' }
    ]
  },
  {
    name: 'align-self',
    type: 'select',
    initialValue: '',
    options: [
      { value: 'selfAuto', label: 'auto' },
      { value: 'selfStart', label: 'flex-start' },
      { value: 'selfEnd', label: 'flex-end' },
      { value: 'selfCenter', label: 'center' },
      { value: 'selfBaseline', label: 'baseline' },
      { value: 'selfStretch', label: 'stretch' }
    ]
  },
  {
    name: 'position',
    type: 'select',
    initialValue: '',
    options: [
      { value: 'relative', label: 'relative' },
      { value: 'absolute', label: 'absolute' },
      { value: 'fixed', label: 'fixed' },
      { value: 'sticky', label: 'sticky' }
    ]
  },
  { name: 'square', type: 'text', initialValue: '', parser: parseText },
  { name: 'listTop', type: 'text', initialValue: '', parser: parseText },
  { name: 'listRight', type: 'text', initialValue: '', parser: parseText },
  { name: 'listBottom', type: 'text', initialValue: '', parser: parseText },
  { name: 'listLeft', type: 'text', initialValue: 4, parser: parseText },
  { name: 'top', type: 'text', initialValue: '', parser: parseText },
  { name: 'right', type: 'text', initialValue: '', parser: parseText },
  { name: 'bottom', type: 'text', initialValue: '', parser: parseText },
  { name: 'left', type: 'text', initialValue: '', parser: parseText },
  { name: 'z', type: 'text', displayName: 'z-index', initialValue: '', parser: parseText }
]
