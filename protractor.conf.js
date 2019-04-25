// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
exports.config = {
  specs: [
    './e2e/**/login.ts',
    './e2e/**/createExplanations.ts',
    './e2e/**/editExplanations.ts',
    './e2e/**/navigateExplanations.ts',
    './e2e/**/deleteExplanations.ts'
  ],
  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      args: [
        'start-maximized'
      ]
    }
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',

  onPrepare: function () {
    browser.ignoreSynchronization = true;
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({spec: {displayStacktrace: true}}));
  }
};
