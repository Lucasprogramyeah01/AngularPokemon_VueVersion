<!-- SCRIPT ---------------------------------------------------------------------------------------------------------------->

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { PokemonService } from '../services/pokemon-service'
import { Pokemon, PokemonListResponse } from '../interfaces/pokemon'
import PokemonCard from './pokemon-card.vue'

const listPokemon = ref<Pokemon[]>([])

onMounted(async () => {
  try {
    const response = await PokemonService.getPokemonList()
    const data = response.data as PokemonListResponse  
      //El "as PokemonListResponse" es una aserción de tipo en TypeScript.
      /*Es literalmente: "Confía, esta respuesta tiene la forma de un PokemonListResponse".
      Así puedes tener autocompletado, validación de tipos y mejor manejo de errores.*/
    listPokemon.value = data.results
  } catch (error) {
    console.error('Error al obtener la lista de Pokémon:', error)
  }
})

function getPokemonId(url: string): number {
  return parseInt(url.split('/')[6])
}
</script>

<!-- TEMPLATE -------------------------------------------------------------------------------------------------------------->

<template>
    <div class="container mt-5 pt-5">
        <div class="row mt-5">
            <div v-for="pokemon in listPokemon" :key="getPokemonId(pokemon.url)" class="col-md-3 col-12 p-2 my-3">
                <PokemonCard :pokemonId="getPokemonId(pokemon.url)"></PokemonCard>
            </div>
        </div>
    </div>
</template>

<!-- STYLE ----------------------------------------------------------------------------------------------------------------->

<style scoped>

</style>