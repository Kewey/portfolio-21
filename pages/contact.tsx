import React, { useState } from 'react'
import Layout from 'components/Layout'
import { useForm } from 'react-hook-form'
import Button from 'components/Button'
import ButtonCss from 'styles/Button.module.scss'
import Head from 'next/head'

export default function Contact() {
	const { register, handleSubmit, watch } = useForm()

	const onSubmit = handleSubmit(async (data: any) => {
		const res = await fetch('/api/contact-form', {
			method: 'POST',
			body: JSON.stringify(data),
		})

		if (res.status === 201) {
			console.log(`res`, res)
		} else {
			await res.json()
		}
	})

	return (
		<Layout>
			<Head>
				<title>Contact | Jordan Souchez</title>
				<meta
					name='description'
					content="Pour toutes demandes de projets ou d'emploie vous pouvez me contacter ici."
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<section>
				<div className='container'>
					<h1>Contactez moi</h1>

					<form onSubmit={onSubmit}>
						<div>
							<label htmlFor='nom'>Nom</label>
							<input {...register('nom')} />
						</div>
						<div>
							<label htmlFor='prenom'>Prenom</label>
							<input {...register('prenom')} />
						</div>
						<div>
							<label htmlFor='mail'>Adresse mail</label>
							<input {...register('email')} />
						</div>
						<div>
							<label htmlFor='message'>Votre message</label>
							<textarea {...register('message')}></textarea>
						</div>
						<div>
							<button className={ButtonCss.primary}>
								<span>Envoyer</span>
							</button>
						</div>
					</form>
				</div>
			</section>
		</Layout>
	)
}
