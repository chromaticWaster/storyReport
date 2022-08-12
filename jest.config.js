module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.ts?$': 'ts-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    testPathIgnorePatterns: ['<rootDir>/dist/'],
    modulePathIgnorePatterns: ['node_modules', 'jest-test-results.json'],
    reporters: ['default','jest-github-actions-reporter'],
    testLocationInResults: true
  };