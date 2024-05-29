import MovieVideos from './../../../components/movie-videos'
import MovieInfo from './../../../components/movie-info'
import { Suspense } from 'react'
const MovieDetail = async ({ params: { id } }) => {
  //const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)])
  //const trailer = videos.find((video) => video.type === 'Trailer')
  return (
    <>
      <Suspense fallback={<h1>loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
      <Suspense fallback={<h1>loading movie info</h1>}>
        <MovieInfo id={id}/>
      </Suspense>
    </>
  )
}
export default MovieDetail
