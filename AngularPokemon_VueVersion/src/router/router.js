import { createRouter, createWebHistory } from 'vue-router'

// Si prefieres, también se puede utilizar la @ en lugar de los 2 puntos.
// La @ hace referencia a la carpeta "src", por lo que la ruta se inicia desde allí.
// Si la @ no funciona de primeras, es porque hay que configurarla en el vite.config.js

/*import PokemonList from '@/components/pokemon-list.vue'*/

import PokemonList from '../components/pokemon-list.vue'
import ItemList from '../components/item-list.vue'
//import GameList from '../components/GameList.vue'
import PokemonDetail from '../components/pokemon-detail.vue'
//import ItemDetail from '../components/Item-detail.vue'
import PageNotFound from '../shared/page-not-found.vue'

const routes = [
  { path: '/pokemon', component: PokemonList },
  { path: '/item', component: ItemList },
  //{ path: '/game', component: GameList },
  { path: '/pokemon-detail/:id', component: PokemonDetail },
  //{ path: '/item-detail/:id', component: ItemDetail },
  { path: '/', redirect: '/pokemon' },
  { path: '/:catchAll(.*)', component: PageNotFound }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
