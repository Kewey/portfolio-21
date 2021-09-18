import { Client } from '@notionhq/client'

export default async function handler(req: any, res: any) {
	if (req.method !== 'POST') {
		return res
			.status(405)
			.json({ message: `${req.method} requests are not allowed` })
	}

	const NOTION_KEY = process.env.NOTION_API_KEY || ''

	const notion = new Client({
		auth: NOTION_KEY,
	})

	try {
		const { nom, prenom, email, message } = JSON.parse(req.body)
		await notion.pages.create({
			parent: {
				database_id: process.env.NOTION_DATABASE_ID || '',
			},
			properties: {
				title: {
					type: 'title',
					title: [{ type: 'text', text: { content: nom } }],
				},
				Prenom: {
					type: 'rich_text',
					rich_text: [{ type: 'text', text: { content: prenom } }],
				},
				Email: {
					type: 'email',
					email: email,
				},
				Message: {
					type: 'rich_text',
					rich_text: [{ type: 'text', text: { content: message } }],
				},
			},
		})
		res.status(201).json({ msg: 'Success' })
	} catch (error) {
		res.status(500).json({ msg: error })
	}
}
