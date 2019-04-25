// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const { AwesomeReport } = require('jasmine-awesome-report');

const config = {
  fullPath: 'awesome-report',
  fileName: 'report',
  merge: true
};

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
    browser.manage().timeouts().implicitlyWait(4000);
    browser.ignoreSynchronization = true;
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({spec: {displayStacktrace: true}}));
    jasmine.getEnv().addReporter(AwesomeReport.getReport(config));
  }
};
