import Prismic from '@prismicio/client'

const api_key = process.env.API_URL || ''

export const Client = Prismic.client(api_key)