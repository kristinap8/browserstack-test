require('dotenv').config();

exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  updateJob: false,
  specs: [
    './test/specs/**.*.js'
  ],
  exclude: [],

  capabilities: [{
    project: "First Webdriverio Android Project",
    build: 'Webdriverio Android',
    name: 'first_test',
    device: 'Huawei P30',
    os_version: "9.0",
    app: process.env.BROWSERSTACK_APP_ID,
    'browserstack.debug': true
  }],
  
  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 90000
  },

  reporters: ['spec', ['allure',
  {
      outputDir: 'reports/allure-results/',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: false
  }]]
};