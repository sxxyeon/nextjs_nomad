import { API_URL } from './../app/(home)/page'
import styles from '../styles/component/movie-videos.module.css'
async function getVideos(id) {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  console.log(Date.now())
  const resp = await fetch(API_URL + `/${id}/videos`)
  const json = await resp.json()
  return json
}

export default async function MovieVideos({ id }) {
  
  const videos = await getVideos(id)
  const trailer = videos.find((video) => video.type === 'Trailer')

  return (
    <div className={styles.container}>
      <iframe
        src={trailer?.key? `https://www.youtube.com/embed/` + trailer.key : videos[0]}
      ></iframe>
    </div>
  )
}
