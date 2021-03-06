module.exports = {
  verbose: true,
  collectCoverage: true,
  testMatch: [
    '**/tests/unit/**/*.spec.ts|**/__tests__/*.ts',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
