const port = process.env.CRAWLER_PORT || 9000

module.exports = {
  server: {
    command: `yarn serve`,
    port,
    launchTimeout: 10000,
    debug: false,
  },
}
