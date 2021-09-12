const path = require('path')

module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'fr'],
    defaultLocale: 'fr'
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }
}
