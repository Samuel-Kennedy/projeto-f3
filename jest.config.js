module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    testEnvironment: 'jsdom',
    transformIgnorePatterns: [
      'node_modules/(?!d3-selection|@swimlane/ngx-charts).*\\.js$',
    ],
  };
  