import {Client} from '../prismic-config'
import {RichText} from 'prismic-reactjs'

import Head from 'next/head'
import styles from '../styles/Home.module.css'



export default function Home({document}: any) {

	const { data } = document

	return (
		<div className={styles.container}>
			<Head>
				<title>Jordan Souchez | Developpeur d{"'"}intéractions créatives</title>
				<meta
					name='description'
					content='Etudiant en developpement web, spécialisé dans le front end et les animations et interactions avec les utilisateurs.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					{RichText.asText(data.title)}
				</h1>
			</main>
		</div>
	)
}

export async function getStaticProps() {
	const document = await Client.getSingle('homepage', {})

	return {
		props : {
			document
		}
	}
}
