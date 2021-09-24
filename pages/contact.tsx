import React, { useState } from 'react'
import Layout from 'components/Layout'
import { useForm } from 'react-hook-form'
import Button from 'components/Button'
import ButtonCss from 'styles/Button.module.scss'
import Head from 'next/head'
import { RichText } from 'prismic-reactjs'

export default function Contact() {
	const [formLoad, setFormLoad] = useState(false)
	const [sendForm, setSendForm] = useState(false)
	const { register, handleSubmit } = useForm()

	const onSubmit = handleSubmit(async (data: any) => {
		setFormLoad(true)
		const res = await fetch('/api/contact-form', {
			method: 'POST',
			body: JSON.stringify(data),
		})

		if (res.status === 201) {
			setFormLoad(true)
			setSendForm(true)
		} else {
			setFormLoad(true)
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
							<input {...register('nom', { required: true, maxLength: 80 })} />
						</div>
						<div>
							<label htmlFor='prenom'>Prenom</label>
							<input
								{...register('prenom', { required: true, maxLength: 80 })}
							/>
						</div>
						<div>
							<label htmlFor='mail'>Adresse mail</label>
							<input
								{...register('email', {
									required: true,
									pattern: /^\S+@\S+$/i,
								})}
							/>
						</div>
						<div>
							<label htmlFor='message'>Votre message</label>
							<textarea {...register('message', { required: true })}></textarea>
						</div>
						<div>
							<button
								className={ButtonCss.primary}
								disabled={formLoad || sendForm}>
								{!sendForm && <span>Envoyer</span>}
								{sendForm && <span>Message envoyé</span>}
							</button>
						</div>
					</form>
				</div>
			</section>
		</Layout>
	)
}
