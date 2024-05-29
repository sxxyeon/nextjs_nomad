'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/Navigation'
const Navigation = () => {
  const path = usePathname()
  const style = {
    display:'block',
    color: 'red',
    fontSize:"20px",
    fontWeight:'bold',
    textDecoration:'none'
  }
  return (
    <nav>
      <ul>
        <li>
          <Link href="/" style={path == '/' ? style : {}}>home</Link>
        </li>
        <li>
          <Link href="/about-us" style={path == '/about-us' ? style : {}}>about us</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
