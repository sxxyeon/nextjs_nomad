import { API_URL } from './../app/(home)/page'
import styles from '../styles/component/movie-info.module.css'
async function getMovie(id) {
  
  // await new Promise((resolve) => setTimeout(resolve, 5000))
  // console.log(Date.now())
  const resp = await fetch(`${API_URL}` + `/${id}`)
  const json = await resp.json()
  return json
}

export default async function MovieInfo({ id }) {
  const movie = await getMovie(id)
  return (
    <div className={styles.container}>
      <img className={styles.poster} src={movie.poster_path} alt="" />
      <div className={styles.info}>
        <h2 className={styles.title}>{movie.title}</h2>
        <h3>*{movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={'_blank'}>homepage &rarr;</a>
      </div>
    </div>
  )
}
