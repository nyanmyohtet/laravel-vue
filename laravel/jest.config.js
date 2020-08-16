// jest.config.js
const { defaults } = require("jest-config");
module.exports = {
  collectCoverage: false,
  collectCoverageFrom: [
    "resources/js/**/*.{js,vue}",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
  // An array of file extensions your modules use.
  moduleFileExtensions: ["js", "json", "vue"],
  testRegex: "tests/vue/.*.test.js$",
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.js$": "babel-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/resources/$1",
    "^~/(.*)$": "<rootDir>/resources/js/$1",
  },
};
