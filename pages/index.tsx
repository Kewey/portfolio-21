import { Client } from '../prismic-config'
import { RichText } from 'prismic-reactjs'

import Head from 'next/head'
import Link from 'next/link'
import hero from '../styles/Home.module.scss'
import Layout from 'components/Layout'
import Button from 'components/Button'

export default function Home({ document }: any) {
	const { data } = document

	return (
		<Layout>
			<Head>
				<title>Jordan Souchez | Developpeur d{"'"}intéractions créatives</title>
				<meta
					name='description'
					content='Etudiant en developpement web, spécialisé dans le front end et les animations et interactions avec les utilisateurs.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<section className='container'>
				<div className={'grid ' + hero.hero}>
					{RichText.render(data.title)}
					<div className={hero.context}>
						{RichText.render(data.context)}
						<hr />
						<a href={data.showreel_link.url} target={data.showreel_link.target}>
							icon
							{RichText.render(data.showreel_text)}
						</a>
					</div>
					<div className={hero.buttons}>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
							<path
								id='circle'
								d='M 25, 50 a 25,25 0 1,1 50,0 a 25,25 0 1,1 -50,0'
							/>
							<text fill='#fff'>
								<textPath xlinkHref='#circle' textLength='150'>
									{RichText.asText(data.available)}
								</textPath>
							</text>
						</svg>
						<Button url={'contact'}>
							{RichText.asText(data.contact_text)}
						</Button>
						<Link href='project'>{RichText.asText(data.project_text)}</Link>
					</div>
				</div>
			</section>
			<section className='container'></section>
		</Layout>
	)
}

export async function getStaticProps() {
	const document = await Client.getSingle('homepage', {})

	return {
		props: {
			document,
		},
	}
}
