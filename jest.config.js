module.exports = {
  testEnvironment: 'node',
  rootDir: '.',
  roots: ['./__tests__'],
  testMatch: ['**/__tests__/**/*.spec.js'],
  moduleNameMapper: {
    '@/(.*)': './src/$1',
  },
  verbose: true,
}
