<!-- SCRIPT ---------------------------------------------------------------------------------------------------------------->

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { PokemonDetailResponse } from '../interfaces/pokemon-detail'
import { PokemonService } from '../services/pokemon-service'

const route = useRoute()
const pokemonId = ref<string | null>(route.params.id as string)
const pokemon = ref<PokemonDetailResponse | null>(null)

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

function cambiarColorSegunTipo(nombreTipo: string): { backgroundColor: string } {
  return { backgroundColor: coloresTipo[nombreTipo] || 'gray' }
}

function cambiarColorTextoSegunTipo(nombreTipo: string): { color: string } {
  return { color: coloresTipo[nombreTipo] || 'black' }
}

onMounted(async () => {
  if (pokemonId.value) {
    //const id = parseInt(pokemonId.value)
    const response = await PokemonService.getPokemon(parseInt(pokemonId.value))
    pokemon.value = response.data
  }
})
</script>

<!-- TEMPLATE -------------------------------------------------------------------------------------------------------------->

<template>
    <div v-if="pokemon" class="h-100" :style="cambiarColorSegunTipo(pokemon.types[0].type.name)">
        <!-- Cuerpo de la página -->
        <div class="container w-100 d-flex flex-wrap justify-content-around pt-5 pb-4" style="margin-top: 100px !important;">

        <!-- Imagen y descripción -->
        <div class="container d-flex justify-content-center flex-wrap" style="width: 40%;">
            <div class="w-100 d-flex justify-content-center">
                <img :src="pokemon.sprites.other['official-artwork'].front_default" style="width: 100%;" :alt="pokemon.name" />
            </div>
            <div id="descripcion" class="w-100">
                <h3 class="text-white m-3 tipografia">
                    <!--{{ pokemon!.woah.flavor_text_entries.find(p => p.language.name == "es")?.flavor_text?.replace(/\n/g," ") }} NO FUNCIONA-->
                </h3>
            </div>
        </div>

        <!-- Información -->
        <div class="container d-flex justify-content-center flex-wrap" style="width: 60%;">

            <!-- Nombre y número -->
            <div id="nombreNumero" class="container w-100 d-flex justify-content-between" style="height: 8%">
                <h1 id="nombre" class="text-light text-uppercase me-5 align-middle tipografia" style="font-size: 60px;">
                    {{ pokemon.name }}
                </h1>
                <h1 id="numero" class="text-light ms-5 align-middle tipografia" style="font-size: 60px;">
                    #{{ pokemonId }}
                </h1>
            </div>

            <!-- Características -->
            <div class="container bg-white rounded-4" style="height: 85%">

            <!-- Tipos -->
            <div class="container d-flex flex-wrap p-4">
                <div v-if="pokemon.types.length > 0" class="w-25">
                    <div class="px-3 me-2 rounded-5" :style="cambiarColorSegunTipo(pokemon.types[0].type.name)">
                        <h5 class="text-light text-center mt-1 p-1 text-capitalize tipografia">
                            {{ pokemon.types[0].type.name }}
                        </h5>
                    </div>
                </div>
                <div class="w-25">
                    <div class="px-3 ms-2 rounded-5" :style="pokemon.types[1] ? cambiarColorSegunTipo(pokemon.types[1].type.name) : {}">
                        <h5 class="text-light text-center mt-1 p-1 text-capitalize tipografia">
                            {{ pokemon.types[1]?.type.name || '' }}
                        </h5>
                    </div>
                </div>
            </div>

            <!-- Peso, Altura y Habilidad -->
            <div class="container d-flex flex-wrap justify-content-center">
                <div style="width: 30%;"><h2 class="tipografia"><i class="bi bi-box-seam-fill"></i> Peso</h2></div>
                <div style="width: 30%;"><h2 class="tipografia"><i class="bi bi-rulers"></i> Altura</h2></div>
                <div style="width: 30%;"><h2 class="tipografia"><i class="bi bi-star-fill"></i> Habilidad</h2></div>
            </div>
            <div id="pesoAlturaHabilidad" class="container d-flex flex-wrap justify-content-center gris">
                <div style="width: 30%;"><h2>{{ pokemon.weight / 10 }} kg</h2></div>
                <div style="width: 30%;"><h2>{{ pokemon.height / 10 }} m</h2></div>
                <div class="text-capitalize" style="width: 30%;">
                    <h2>{{ pokemon.abilities[0].ability.name }}</h2>
                </div>
            </div>

            <!-- Estadísticas -->
            <div class="mt-5">
                <h2 class="ms-4 ps-3 tipografia"><i class="bi bi-bar-chart-line-fill"></i> Estadísticas</h2>
            </div>

            <div id="estadisitcas" class="container d-flex m-2 mt-3 mb-3">
                <div class="w-50 mx-4 d-flex justify-content-center flex-column">
                <div><h2 class="gris"><span class="tipografia" :style="cambiarColorTextoSegunTipo(pokemon.types[0].type.name)">HP:</span> {{ pokemon.stats[0].base_stat }}</h2></div>
                <div><h2 class="gris"><span class="tipografia" :style="cambiarColorTextoSegunTipo(pokemon.types[0].type.name)">ATK:</span> {{ pokemon.stats[1].base_stat }}</h2></div>
                <div><h2 class="gris"><span class="tipografia" :style="cambiarColorTextoSegunTipo(pokemon.types[0].type.name)">DEF:</span> {{ pokemon.stats[2].base_stat }}</h2></div>
                </div>
                <div class="w-50 mx-4 d-flex justify-content-center flex-column">
                <div><h2 class="gris"><span class="tipografia" :style="cambiarColorTextoSegunTipo(pokemon.types[0].type.name)">SP ATK:</span> {{ pokemon.stats[3].base_stat }}</h2></div>
                <div><h2 class="gris"><span class="tipografia" :style="cambiarColorTextoSegunTipo(pokemon.types[0].type.name)">SP DEF:</span> {{ pokemon.stats[4].base_stat }}</h2></div>
                <div><h2 class="gris"><span class="tipografia" :style="cambiarColorTextoSegunTipo(pokemon.types[0].type.name)">SPD:</span> {{ pokemon.stats[5].base_stat }}</h2></div>
                </div>
            </div>

            </div>
        </div>
        </div>
    </div>
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

.fondoNegroEstandar{
    background-color: #313030 !important;
}

.fondoRojo{
    background-color: #CA0000 !important;
}

.fondoGrisClaro{
    background-color: #C9C9C9 !important;
}

.fondoGris{
    background-color: rgb(128, 127, 127) !important;
}

.blanco{
    color: #FAF6F6 !important;
}

.gris{
    color: #707266 !important;
}

a:hover{
    color:#CA0000 !important;
}

/*Scroll para menús*/
.scrollable-menu {
    height: auto;
    max-height: 200px;
    overflow-x: hidden;
}

/*Color de relleno para el icono de la Pokébal*/
#rellenoPokeball{
    fill: #313030;
}

.menuRojo{
    margin-top: 102.06px;
}


.fondoPlanta{
    background-color: #74CB48;
}

.planta{
    color: #74CB48;
}

.fondoVeneno{
    background-color: #A43E9E;
}

.fondoFuego{
    background-color: #F57D31;
}

.fondoVolador{
    background-color: #A891EC;
}
</style>