import React from 'react'
import Layout from 'components/Layout'
import Head from 'next/head'
import projectCSS from 'styles/Project.module.scss'
import Button from 'components/Button'
import { Client } from 'prismic-config'
import { RichText } from 'prismic-reactjs'
import Image, { ImageLoaderProps } from 'next/image'

const prismicLoader = ({ src, width, quality }: ImageLoaderProps) => {
	return `${src}?w=${width}&q=${quality}`
}

export default function About({ about }: any) {
	const { data } = about

	return (
		<Layout>
			<Head>
				<title>Contact | Jordan Souchez</title>
				<meta
					name='description'
					content='Etudiant en developpement web, spécialisé dans le front end et les animations et interactions avec les utilisateurs.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<section className={projectCSS.hero}>
				<div className='container'>
					<div className={projectCSS.grid}>
						<div className={projectCSS.content}>
							{RichText.render(data.title)}
							<Image
								loader={prismicLoader}
								src={data.profil_picture.url}
								alt={data.profil_picture.alt}
								width={data.profil_picture.dimensions.width}
								height={data.profil_picture.dimensions.height}
							/>
						</div>
						<div className={projectCSS.context}>
							{RichText.render(data.content)}
							<hr />
							{data.social_medias.map((social: any, index: number) => (
								<Button
									key={social.social_name + index}
									url={social.social_link.url}
									variante='external'
									isExternal
								>
									{RichText.asText(social.social_name)}
								</Button>
							))}
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export async function getStaticProps() {
	const about = await Client.getSingle('about', {})

	return {
		props: {
			about,
		},
	}
}
