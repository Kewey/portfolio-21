const path = require('path')

module.exports = {
	reactStrictMode: true,
	// images: {
	// 	domains: ['images.prismic.io'],
	// },
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
}
