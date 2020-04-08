module.exports = {
  runner: 'jest-runner-eslint',
  displayName: 'lint',
  testMatch: ['<rootDir>/src/**/*.js'],
  reporters: [
    'default',
    ['jest-junit', {
      outputDirectory: 'test-reports',
      outputName: 'lint.junit.xml',
    }],
  ],
}
