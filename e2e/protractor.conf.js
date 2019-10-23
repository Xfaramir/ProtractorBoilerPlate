// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

const AllureReporter = require('jasmine-allure-reporter');

const screenShotUtils = require('protractor-screenshot-utils')
  .ProtractorScreenShotUtils;

exports.config = {
  directConnect: false,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'https://www.protractortest.org',
  SELENIUM_PROMISE_MANAGER: false,
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 90000,
    print: function() {}
  },
  allScriptsTimeout: 15000,
  // specs: ['./src/specs/**/*.e2e-spec.ts'],
  suites: {
    homePage: [
      'src/specs/home/home.e2e-spec.ts',
      'src/specs/home/NavLinks.e2e-spec.ts'
    ],
    playPage: 'src/specs/play/play.e2e-spec.ts',
    searchPage: 'src/specs/Search.e2e-spec.ts'
  },
  capabilities: {
    browserName: 'chrome'
  },
  // multiCapabilities: [
  //   {
  //     name: 'chrome',
  //     browserName: 'chrome',s
  //     count: 1,
  //     'goog:chromeOptions': {
  //       args: [
  //         'no-sandbox',
  //         '--headless',
  //         'disable-gpu',
  //         '--window-size=1366,768'
  //       ]
  //     }
  //   },
  //   {
  //     name: 'iPhone 5 (s)',
  //     browserName: 'chrome',
  //     count: 1,
  //     'goog:chromeOptions': {
  //       args: [
  //         'no-sandbox',
  //         '--headless',
  //         'disable-gpu',
  //         '--window-size=320,460'
  //       ]
  //     }
  //   },
  //   {
  //     name: 'Google Pixel Mobile',
  //     browserName: 'chrome',
  //     count: 1,
  //     'goog:chromeOptions': {
  //       args: [
  //         'no-sandbox',
  //         '--headless',
  //         'disable-gpu',
  //         '--window-size=412,604'
  //       ]
  //     }
  //   },
  //   {
  //     name: 'Galaxy Tab S2',
  //     browserName: 'chrome',
  //     count: 1,
  //     'goog:chromeOptions': {
  //       args: [
  //         'no-sandbox',
  //         '--headless',
  //         'disable-gpu',
  //         '--window-size=768,904'
  //       ]
  //     }
  //   },
  //   {
  //     name: 'Pixel Tablet',
  //     browserName: 'chrome',
  //     count: 1,
  //     'goog:chromeOptions': {
  //       args: [
  //         'no-sandbox',
  //         '--headless',
  //         'disable-gpu',
  //         '--window-size=900,1104'
  //       ]
  //     }
  //   }
  // ],

  onPrepare() {
    browser.driver
      .manage()
      .window()
      .maximize();
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
