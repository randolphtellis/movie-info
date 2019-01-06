import Vue from 'vue'
import Router from 'vue-router'
import Search from './views/Search.vue'
import MovieBar from './components/MovieBar.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search
    },
    {
      path: '/movie/:movieId',
      name: 'Movie',
      component: MovieBar
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
