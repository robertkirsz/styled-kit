module.exports = {
  transform: { '^.+\\.js?$': 'babel-jest' },
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['./jest.setup.js']
}
