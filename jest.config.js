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
  collectCoverageFrom: process.env.CI ? [
    // In CI, only test API and lib code (backend logic)
    'pages/api/**/*.{js,jsx}',
    'lib/**/*.{js,jsx}',
    '!pages/api/**/*.d.ts',
    '!**/*.config.js',
    '!**/node_modules/**',
  ] : [
    // In local development, test everything
    'pages/api/**/*.{js,jsx}',
    'lib/**/*.{js,jsx}',
    'components/**/*.{js,jsx}',
    '!pages/api/**/*.d.ts',
    '!**/*.config.js',
    '!**/node_modules/**',
  ],
  coverageThreshold: process.env.CI ? {
    // CI: Only require coverage for backend API and lib code
    global: {
      branches: 80,
      functions: 75,
      lines: 80,
      statements: 80,
    },
  } : {
    // Local: Lower thresholds since components aren't tested yet
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60,
    },
  },
  testTimeout: 30000, // 30 seconds for database operations
  maxWorkers: process.env.CI ? 1 : '50%', // Use single worker in CI
}

module.exports = nextJest(customJestConfig)
