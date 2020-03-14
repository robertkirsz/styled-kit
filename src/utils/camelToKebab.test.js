import camelToKebab from './camelToKebab'

describe('camelToKebab()', () => {
  it('Works well with lower and camel cases', () => {
    expect(camelToKebab('loremIpsum')).toEqual('lorem-ipsum')
    expect(camelToKebab('loremipsum')).toEqual('loremipsum')
    expect(camelToKebab('')).toEqual('')
  })

  it('Does not work well with other cases', () => {
    expect(camelToKebab('LoremIpsum')).toEqual('-lorem-ipsum')
    expect(camelToKebab('lorem Ipsum')).toEqual('lorem -ipsum')
    expect(camelToKebab('lorem-Ipsum')).toEqual('lorem--ipsum')
  })

  it('Does not break for non-string values', () => {
    expect(camelToKebab()).toEqual(undefined)
    expect(camelToKebab(1)).toEqual(1)
    expect(camelToKebab({})).toEqual({})
    expect(camelToKebab([])).toEqual([])
  })
})
