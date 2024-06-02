'use client'
import React from 'react'
import { useRouter } from 'next/Navigation'
import Link from 'next/link'
import styles from '../styles/component/movie.module.css'
import Navigation from './navigation';
const Movie = ({ title, poster_path, id }) => {
  const router = useRouter();
  const onClick = () =>{
    router.push(`/${id}`)
  }
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick}/>
      <Link href={`/${id}`}>{title}</Link>
    </div>
  )
}

export default Movie
