import React, { ReactChildren, ReactElement } from 'react'
import Link from 'next/link'
import styles from 'styles/Button.module.scss'

export default function Button({
	url,
	variante = 'primary',
	icon,
	isExternal,
	children,
}: {
	url: string
	children: ReactElement | string
	variante?: string
	icon?: ReactElement
	isExternal?: boolean
}) {
	if (isExternal) {
		return (
			<a className={styles[variante]} href={url}>
				<span>
					{icon}
					{children}
				</span>
			</a>
		)
	} else {
		return (
			<Link href={url} passHref>
				<a className={styles[variante]}>
					<span>
						{icon}
						{children}
					</span>
				</a>
			</Link>
		)
	}
}
