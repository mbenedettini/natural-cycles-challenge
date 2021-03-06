module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/test/*.test.ts'],
  rootDir: '/usr/src/app/src',
  collectCoverage: true,
  collectCoverageFrom: ['routes/users.ts'],
  reporters: ['default', 'jest-junit'],
}
