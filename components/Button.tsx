import React, { ReactElement } from 'react'
import Link from 'next/link'
import styles from 'styles/Button.module.scss'
import Icon from './Icon'

import linkOut from 'public/Link-out-arrow.svg'

export default function Button({
	url,
	variante = 'primary',
	icon,
	isExternal,
	children,
}: {
	url: string
	children: ReactElement | string
	variante?: 'primary' | 'text' | 'external'
	icon?: ReactElement
	isExternal?: boolean
}) {
	return (
		<Link href={url} passHref>
			<a className={styles[variante]} target={isExternal ? '_blank' : '_self'}>
				<span>
					{icon}
					{children}
				</span>
				{variante === 'external' && <Icon file={linkOut} />}
			</a>
		</Link>
	)
}
