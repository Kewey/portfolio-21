import React from 'react'
import { Client } from '../prismic-config'
import { RichText } from 'prismic-reactjs'
import Prismic from '@prismicio/client'

import 'swiper/css'
import play from 'public/play.svg'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import hero from '../styles/Home.module.scss'
import slider from '../styles/Slider.module.scss'
import Layout from 'components/Layout'
import Button from 'components/Button'
import { Swiper, SwiperSlide } from 'swiper/react'
import Icon from 'components/Icon'

export default function Home({ document, projects }: any) {
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

			<section className={hero.hero}>
				<div className='container'>
					<div className={hero.grid}>
						<div className={hero.content}>
							{RichText.render(data.title)}
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
								<Button url={'/contact'}>
									{RichText.asText(data.contact_text)}
								</Button>
								<Button url={'/project'} variante='text'>
									{RichText.asText(data.project_text)}
								</Button>
							</div>
						</div>
						<div className={hero.context}>
							{RichText.render(data.context)}
							<hr />
							<Button
								url={data.showreel_link.url}
								variante='text'
								icon={<Icon file={play} />}
								isExternal>
								{RichText.asText(data.showreel_text)}
							</Button>
						</div>
					</div>
				</div>
			</section>
			<section className={slider.slider}>
				<div className='container'>
					<Swiper
						spaceBetween={30}
						slidesPerView={1.2}
						breakpoints={{
							1200: {
								slidesPerView: 1.8,
							},
						}}>
						{projects.results.map((project: any) => {
							console.log(`project.data.cover.url`, project.data.cover.url)
							return (
								<SwiperSlide key={project.uid}>
									<Link href={'/project/' + project.uid} passHref>
										<a className={slider.slide}>
											<img
												src={project.data.cover.url}
												alt={project.data.cover.alt}
											/>
											<h3>{RichText.asText(project.data.project_name)}</h3>
										</a>
									</Link>
								</SwiperSlide>
							)
						})}
					</Swiper>
				</div>
			</section>
		</Layout>
	)
}

export async function getStaticProps() {
	const document = await Client.getSingle('homepage', {})
	const projects = await Client.query(
		Prismic.Predicates.at('document.type', 'project'),
		{}
	)

	return {
		props: {
			document,
			projects,
		},
	}
}
