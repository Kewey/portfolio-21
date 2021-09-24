import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						href='https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap'
						rel='stylesheet'
					/>
					<meta
						name='title'
						content="Jordan Souchez | Développeur d'interaction créative"
					/>
					<meta
						name='description'
						content="Développeur passionné par la création d'interaction humaine et créative."
					/>

					<meta property='og:type' content='website' />
					<meta property='og:url' content='https://metatags.io/' />
					<meta
						property='og:title'
						content="Jordan Souchez | Développeur d'interaction créative"
					/>
					<meta
						property='og:description'
						content="Développeur passionné par la création d'interaction humaine et créative."
					/>
					<meta
						property='og:image'
						content='https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png'
					/>

					<meta property='twitter:card' content='summary_large_image' />
					<meta property='twitter:url' content='https://metatags.io/' />
					<meta
						property='twitter:title'
						content="Jordan Souchez | Développeur d'interaction créative"
					/>
					<meta
						property='twitter:description'
						content="Développeur passionné par la création d'interaction humaine et créative."
					/>
					<meta
						property='twitter:image'
						content='https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
