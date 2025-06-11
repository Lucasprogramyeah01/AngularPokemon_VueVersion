<!-- SCRIPT ---------------------------------------------------------------------------------------------------------------->

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { PokemonDetailResponse } from '../interfaces/pokemon-detail'
import { PokemonService } from '../services/pokemon-service'

/* Se define una prop llamada pokemonId, que es el identificador del Pokémon (igual que @Input() en Angular).
Esta prop se pasa desde el componente padre (pokemon-list.vue) al hijo (pokemon-card.vue).*/

// defineProps<Props>() permite usarla en el script como props.pokemonId.

interface Props {
  pokemonId: number
}
const props = defineProps<Props>()

/* Esto crea una variable reactiva llamada pokemon.
Al principio está vacía (undefined) y se llenará cuando llegue la respuesta de la API.*/

const pokemon = ref<PokemonDetailResponse>()

onMounted(async () => {
  if (props.pokemonId) {
    try {
      // Se llama al servicio getPokemon(pokemonId) usando el valor que vino como prop.
      // Se guarda la respuesta en pokemon.value, que se usará en el <template>.

      const response = await PokemonService.getPokemon(props.pokemonId)
      pokemon.value = response.data
    } catch (error) {
      console.error('Error al obtener los detalles del Pokémon:', error)
    }
  }
})

function cambiarColorOpacidadSegunTipo(nombreTipo1: string): string {
  const coloresTipo: Record<string, string> = {
    normal: 'rgba(170,166,127, .4)',
    fighting: 'rgb(193, 34, 57, .4)',
    flying: 'rgb(168, 145, 236, .4)',
    ground: 'rgb(222, 193, 107, .4)',
    poison: 'rgb(164, 62, 158, .4)',
    rock: 'rgb(182, 158, 49, .4)',
    bug: 'rgb(167, 183, 35, .4)',
    ghost: 'rgb(112, 85, 155, .4)',
    steel: 'rgb(183, 185, 208, .4)',
    fire: 'rgb(245, 125, 49, .4)',
    water: 'rgb(100, 147, 235, .4)',
    grass: 'rgba(116,203,72,.4)',
    electric: 'rgb(249, 207, 48, .4)',
    physic: 'rgb(251, 85, 132, .4)',
    ice: 'rgb(154, 214, 223, .4)',
    dragon: 'rgb(112, 55, 255, .4)',
    dark: 'rgb(117, 87, 76, .4)',
    fairy: 'rgb(230, 158, 172, .4)'
  }

  return `background-color: ${coloresTipo[nombreTipo1]}`
}

function cambiarColorSegunTipo(nombreTipo: string): string {
  const coloresTipo: Record<string, string> = {
    normal: 'rgba(170,166,127)',
    fighting: 'rgb(193, 34, 57)',
    flying: 'rgb(168, 145, 236)',
    ground: 'rgb(222, 193, 107)',
    poison: 'rgb(164, 62, 158)',
    rock: 'rgb(182, 158, 49)',
    bug: 'rgb(167, 183, 35)',
    ghost: 'rgb(112, 85, 155)',
    steel: 'rgb(183, 185, 208)',
    fire: 'rgb(245, 125, 49)',
    water: 'rgb(100, 147, 235)',
    grass: 'rgba(116,203,7)',
    electric: 'rgb(249, 207, 48)',
    physic: 'rgb(251, 85, 132)',
    ice: 'rgb(154, 214, 223)',
    dragon: 'rgb(112, 55, 255)',
    dark: 'rgb(117, 87, 76)',
    fairy: 'rgb(230, 158, 172)'
  }

  return `background-color: ${coloresTipo[nombreTipo]}`
}
</script>

<!-- TEMPLATE -------------------------------------------------------------------------------------------------------------->

<template>
    <RouterLink :to="`/pokemon-detail/${pokemonId}`" class="text-decoration-none">
        <div class="card border-0 mx-3 my-4" style="width: 290px;">  
            
        <!-- Parte superior -->
        <div class="border-5 tipoDominante rounded-4 bordeCaja sombreado"
            :style="pokemon ? cambiarColorOpacidadSegunTipo(pokemon.types[0].type.name) : ''"
        >
            <img v-if="pokemon" :src="pokemon.sprites.other['official-artwork'].front_default"
                class="card-img-top rounded-4" :alt="pokemon.name" 
            />
        </div>

        <!-- Parte inferior -->
        <div class="container d-flex justify-content-between card-body rounded-4 mt-1 px-2 fondoNegro sombreado">
            <div class="ms-2">
                <h6 class="card-number m-0 mb-1 grisClaro tipografia">#{{ pokemonId }}</h6>
                <h5 class="card-title text-light m-0 text-capitalize tipografia">{{ pokemon?.name }}</h5>
            </div>

            <div class="me-2 pt-2" style="width: 35%;">
                <template v-if="pokemon && pokemon.types.length > 1">
                    <div class="px-3 rounded-5" :style="cambiarColorSegunTipo(pokemon.types[0].type.name)">
                        <p class="text-light text-center mb-2 text-capitalize tipografia">
                            {{ pokemon.types[0].type.name }}
                        </p>
                    </div>
                    <div class="px-3 rounded-5" :style="cambiarColorSegunTipo(pokemon.types[1].type.name)">
                        <p class="text-light text-center mt-1 mb-0 text-capitalize tipografia">
                            {{ pokemon.types[1].type.name }}
                        </p>
                    </div>
                </template>

                <template v-else-if="pokemon && pokemon.types.length === 1">
                    <div class="px-3 rounded-5">
                        <p class="text-light text-center mb-2 text-capitalize tipografia">&nbsp;</p>
                    </div>
                    <div class="px-3 rounded-5" :style="cambiarColorSegunTipo(pokemon.types[0].type.name)">
                        <p class="text-light text-center mt-1 mb-0 text-capitalize tipografia">
                            {{ pokemon.types[0].type.name }}
                        </p>
                    </div>
                </template>
            </div>
        </div>

        </div>
    </RouterLink>
</template>

<!-- STYLE ----------------------------------------------------------------------------------------------------------------->

<style scoped>
@font-face {
    font-family: 'jockeyOne';
    src: url('../../fonts/JockeyOne-Regular.ttf');
}

.tipografia{
    font-family: 'jockeyOne';
}

/*Tamaño estándar para la tipografía Jockey One*/
.tamanhoEstandar{
    font-size: 20px;
}

.sombreado{
    box-shadow: 0px 0px 10px black;
}

.bordeCaja{
    border-style: solid !important;
    border-color: #313030 !important;
}

.fondoNegro{
    background-color: #313030 !important;
}

.grisClaro{
    color: #C9C9C9 !important;
}

a:hover h6{
    color: #ff6b6b !important;
}

a:hover h5{
    color: #ff6b6b !important;
}
</style>