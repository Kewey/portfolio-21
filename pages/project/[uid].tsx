import Prismic from "@prismicio/client";
import {Client} from '../../prismic-config'
import {RichText} from 'prismic-reactjs'

import Head from 'next/head'
import styles from 'styles/Home.module.scss'



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

export async function getStaticPaths() {
	const allProjects = await Client.query(Prismic.Predicates.at('document.type', 'project'))
  return {
    paths: allProjects.results.map((project) => {
      return { params: { uid: project.uid }};
    }),
    fallback: false,
  }
}

export async function getStaticProps({params} : any) {
  const post = await Client.getByUID('page', params.uid, {})

  return {
    props: {
      post,
    },
  }
}