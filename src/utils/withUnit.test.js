import withUnit from './withUnit'

describe('withUnit()', () => {
  it('Adds "px" to numbers', () => {
    expect(withUnit(1)).toEqual('1px')
    expect(withUnit(1.1)).toEqual('1.1px')
  })

  it('Returns strings as they are', () => {
    expect(withUnit('1%')).toEqual('1%')
    expect(withUnit('1')).toEqual('1')
    expect(withUnit('a')).toEqual('a')
    expect(withUnit('')).toEqual('')
  })

  it('Does not break for non-aplhanumeric values', () => {
    expect(withUnit()).toEqual(undefined)
    expect(withUnit([])).toEqual([])
    expect(withUnit({})).toEqual({})
  })
})
