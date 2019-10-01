exports.config = {
  tests: './tests/*.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://www.ab-in-den-urlaub.de',
      show: true,
      windowSize: "1200x800",
      waitForNavigation: "networkidle0"
    }
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: 'projectCodecept'
}