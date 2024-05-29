import { API_URL } from './../app/(home)/page'
async function getMovie(id) {
  //,,,
  await new Promise((resolve) => setTimeout(resolve, 5000))
  console.log(Date.now())
  const resp = await fetch(API_URL + `/${id}`)
  const json = await resp.json()
  return json
}

export default async function MovieInfo({ id }) {
  const movie = await getMovie(id)
  return <h2>{movie.title}</h2>
}
