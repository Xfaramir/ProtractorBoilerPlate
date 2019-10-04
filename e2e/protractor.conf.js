// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

const AllureReporter = require('jasmine-allure-reporter');

const screenShotUtils = require('protractor-screenshot-utils')
  .ProtractorScreenShotUtils;

exports.config = {
  allScriptsTimeout: 11000,
  specs: ['./src/specs/**/*.e2e-spec.ts'],
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
  baseUrl: 'https://www.protractortest.org',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').resolve(__dirname, './tsconfig.e2e.json')
    });

    global.screenShotUtils = new screenShotUtils({
      browserInstance: browser,
      setAsDefaultScreenshotMethod: false
    });

    
    jasmine
      .getEnv()
      .addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));

    jasmine.getEnv().addReporter(
      new AllureReporter({
        resultsDir: './e2e/allure-results'
      })
    );
    // Taking a screenshot at the end of each it spec for jenkins allure report
    jasmine.getEnv().afterEach(function(done) {
      browser.takeScreenshot().then(function(png) {
        allure.createAttachment(
          'Screenshot',
          function() {
            return new Buffer(png, 'base64');
          },
          'image/png'
        )();
        allure.addEnvironment('QA', 'David Barrera');
        allure.severity('Normal');
        done();
      });
    });
  }
};
