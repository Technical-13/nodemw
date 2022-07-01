'use strict';
// @ts-check
/** @type {import('jest').Config} */
module.exports = {
	verbose: true,
	testEnvironment: 'node',
	testRegex: '(test).*-test.js$',
	reporters: [ 'default', 'github-actions' /* https://jestjs.io/blog/2022/04/25/jest-28#github-actions-reporter */],
	collectCoverage: true,
	coverageThreshold: {
		lines: 33
	},
	testTimeout: 2000 // one sec
};
