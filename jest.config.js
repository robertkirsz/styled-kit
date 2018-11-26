module.exports = {
  transform: { '^.+\\.js?$': 'babel-jest' },
  moduleDirectories: ['node_modules', 'src'],
  setupTestFrameworkScriptFile: require.resolve('./jest.setup.js')
}
