import React from 'react'
import Link from 'next/link'
import Movie from './../../components/movie'
import styles from '../../styles/pages/home.module.css'
export const metadata = {
  title: 'home',
}

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies'

async function getMovies() {
  //await new Promise((resolve) => setTimeout(resolve, 2000))
  const resp = await fetch(API_URL)
  const json = await resp.json()
  return json
}

async function Home() {
  const movies = await getMovies()

  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  )
}

export default Home
