import parseText from './parseText'

it('parseText()', () => {
  expect(parseText()).toEqual(undefined)
  expect(parseText([])).toEqual(NaN)
  expect(parseText({})).toEqual({})
  expect(parseText(1)).toEqual(1)
  expect(parseText(1.1)).toEqual(1)
  expect(parseText(1.9)).toEqual(1)
  expect(parseText('')).toEqual('')
  expect(parseText('1')).toEqual(1)
  expect(parseText('1.1')).toEqual(1)
  expect(parseText('a')).toEqual('a')
})
