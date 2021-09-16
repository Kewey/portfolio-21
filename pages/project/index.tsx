import React from 'react'
import Link from 'next/link'
import Prismic from '@prismicio/client'
import { Client } from 'prismic-config'
import { RichText } from 'prismic-reactjs'

import Layout from 'components/Layout'

export default function index({ posts }: any) {
	return (
		<Layout>
			<div className='container'>
				<h1>Mes projets</h1>
				{posts.results.map((post: any) => (
					<Link href={'/project/' + post.uid} key={post.uid} passHref>
						<a>
							<img src={post.data.cover.url} alt={post.data.cover.alt} />
							<h2>{RichText.asText(post.data.project_name)}</h2>
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
