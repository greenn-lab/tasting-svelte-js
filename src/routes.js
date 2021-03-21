import Home from './pages/Home.svelte'
import Movie from './pages/Movie.svelte'
import About from './pages/About.svelte'

export default {
  '/': Home,
  '/about': About,
  '/movie/:id': Movie
}
