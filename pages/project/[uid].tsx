import React from 'react'
import Prismic from '@prismicio/client'
import Link from 'next/link'
import { Client } from 'prismic-config'
import { RichText } from 'prismic-reactjs'
import Layout from 'components/Layout'
import projectCSS from 'styles/Project.module.scss'
import Button from 'components/Button'
import Icon from 'components/Icon'
import arrow from 'public/arrow.svg'

export default function Project({ project }: any) {
	const { data } = project
	return (
		<Layout>
			<section className={projectCSS.hero}>
				<div className='container'>
					<div className={projectCSS.grid}>
						<div className={projectCSS.content}>
							{RichText.render(data.project_name)}
							<img src={data.cover.url} alt={data.cover.alt} />
						</div>
						<div className={projectCSS.context}>
							{RichText.render(data.description)}
							<h4>Compétences</h4>
							{RichText.render(data.skills)}
							<hr />
							<Button
								url={data.link.url}
								variante='text'
								icon={<Icon file={arrow} />}
								isExternal>
								Voir le site
							</Button>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export async function getStaticProps({ params }: any) {
	const project = await Client.getByUID('project', params.uid, {})

	return {
		props: {
			project,
		},
	}
}

export async function getStaticPaths() {
	const { results } = await Client.query(
		Prismic.Predicates.at('document.type', 'project'),
		{}
	)

	const paths = results.map((project) => ({
		params: {
			uid: project.uid,
		},
	}))

	return {
		paths,
		fallback: false,
	}
}
