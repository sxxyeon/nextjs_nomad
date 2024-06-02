'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '../styles/component/navigation.module.css'
const Navigation = () => {
  const path = usePathname()
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={path == '/' ? styles.selected : ''}>
          <Link href="/">home</Link>
        </li>
        <li className={path == '/about-us' ? styles.selected : ''}>
          <Link href="/about-us">about us</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
