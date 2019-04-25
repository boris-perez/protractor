// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const {AwesomeReport} = require('jasmine-awesome-report');
const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

const config = {
  fullPath: 'awesome-report',
  fileName: 'report',
  merge: true
};

const reporter = new HtmlScreenshotReporter({
  dest: 'automation-report/screenshots'
  , filename: 'social-explanation-report.html'
});

exports.config = {
  specs: [
    './e2e/login.ts',
    './e2e/createExplanations.ts',
    './e2e/editExplanations.ts',
    './e2e/navigateExplanations.ts',
    './e2e/deleteExplanations.ts'
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

  beforeLaunch: function () {
    return new Promise(function (resolve) {
      reporter.beforeLaunch(resolve);
    });
  },

  afterLaunch: function (exitCode) {
    return new Promise(function (resolve) {
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  },

  onPrepare: function () {
    browser.manage().timeouts().implicitlyWait(4000);
    browser.ignoreSynchronization = true;
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({spec: {displayStacktrace: true}}));
    jasmine.getEnv().addReporter(AwesomeReport.getReport(config));
    jasmine.getEnv().addReporter(reporter);
    afterAll(function (done) {
      process.nextTick(done);
    })
  }
};
