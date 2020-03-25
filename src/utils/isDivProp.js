import stuff from 'stuff'
import memoize from 'utils/memoize'

export default memoize(item => Object.keys(stuff).includes(item))
