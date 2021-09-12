import React, { ReactNode } from 'react'
import Link from 'next/link'
import styles from 'styles/Button.module.scss'

export default function Button({ url, children }: { url: any, children: ReactNode }) {
	return <Link href={url} passHref>
    <a className={styles.button}>
      <span>{children}</span>
    </a>
  </Link>
}
