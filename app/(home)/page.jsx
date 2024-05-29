import React from 'react'
import Link from 'next/link'
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
  console.log(movies)
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li
            key={movie.id}
            style={{
              background: `url(${movie.backdrop_path}) no-repeat`,
              width: '500px',
              height: '300px',
              backgroundSize: 'contain',
            }}
          >
            <Link href={`/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
