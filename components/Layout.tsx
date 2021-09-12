import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from 'public/brand_favicon.svg'
import styles from 'styles/Header.module.scss'
import Button from './Button'

export default function Layout({children} : any) {
	return (
		<>
			<header className={'container ' + styles.header}>
        <Link href="/">
          <div className={styles.brandLink}>
          <Image src={logo} alt="Retour à l'accueil" height="50" width="50" />
          <span>Jordan Souchez</span>
          </div>
        </Link>
        <nav>
          <Link href="project">_Projets</Link>
          <Link href="lab">_Lab</Link>
          <Link href="article">_Articles</Link>
          <Link href="about">_A propos</Link>
        </nav>
        <Button url="contact">
          Contactez moi
        </Button>
      </header>
			<main>{children}</main>
		</>
	)
}
