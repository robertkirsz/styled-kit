import memoize from './memoize'

describe('memoize()', () => {
  it('Call memoized function only once', () => {
    const func = jest.fn()
    const memoized = memoize(func)

    memoized()
    memoized()
    expect(func).toBeCalledTimes(1)
  })
})
