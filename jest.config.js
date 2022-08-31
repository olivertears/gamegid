module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest/legacy',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
