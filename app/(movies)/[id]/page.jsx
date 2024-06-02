import { API_URL } from '../../(home)/page.jsx'
import MovieVideos from './../../../components/movie-videos'
import MovieInfo from './../../../components/movie-info'
import { Suspense } from 'react'


async function getMovie(id) {
  const resp = await fetch(`${API_URL}` + `/${id}`)
  const json = await resp.json()
  return json
}

export async function generateMetadata ({params:{id}}) {
  const movie = await getMovie(id)
  return {
    title : `${movie.title}`
  }
}



const MovieDetail = async ({ params: { id } }) => {
  // 기존방식
  //const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)])
  //const trailer = videos.find((video) => video.type === 'Trailer')
  return (
    <>
      <Suspense fallback={<h1>loading movie info</h1>}>
        <MovieInfo id={id}/>
      </Suspense>
      <Suspense fallback={<h1>loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </>
  )
}
export default MovieDetail
