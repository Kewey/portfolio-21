import React from 'react'
import Link from 'next/link'
import Prismic from '@prismicio/client'
import { Client } from 'prismic-config'
import { RichText } from 'prismic-reactjs'

import Layout from 'components/Layout'
import project from 'styles/Project.module.scss'
import Head from 'next/head'

export default function index({ posts }: any) {
	return (
		<Layout>
			<Head>
				<title>Mes projets | Jordan Souchez</title>
				<meta
					name='description'
					content='La liste de tous mes projets est ici.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='container'>
				<h1>Mes projets</h1>
				{posts.results.map((post: any) => (
					<Link href={'/project/' + post.uid} key={post.uid} passHref>
						<a>
							<div className={project.projectCard}>
								<div className={project.wrapperCover}>
									<img src={post.data.cover.url} alt={post.data.cover.alt} />
								</div>
								<div className={project.content}>
									<h2>{RichText.asText(post.data.project_name)}</h2>
									{RichText.render(post.data.skills)}
								</div>
							</div>
						</a>
					</Link>
				))}
			</div>
		</Layout>
	)
}

export async function getStaticProps() {
	const posts = await Client.query(
		Prismic.Predicates.at('document.type', 'project'),
		{}
	)

	return {
		props: {
			posts,
		},
	}
}
