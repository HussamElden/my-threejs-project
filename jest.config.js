const nextJest = require('next/jest')({
  dir: './',
})

const customJestConfig = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/lib/(.*)$': '<rootDir>/lib/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
  },
  collectCoverageFrom: [
    'pages/api/**/*.{js,jsx}',
    'lib/**/*.{js,jsx}',
    'components/**/*.{js,jsx}',
    '!pages/api/**/*.d.ts',
    '!**/*.config.js',
    '!**/node_modules/**',
  ],
  // No coverage thresholds - just run tests without restrictions
  coverageReporters: ['text', 'lcov', 'html'],
  testTimeout: 30000, // 30 seconds for database operations
  maxWorkers: process.env.CI ? 1 : '50%', // Use single worker in CI
}

module.exports = nextJest(customJestConfig)
