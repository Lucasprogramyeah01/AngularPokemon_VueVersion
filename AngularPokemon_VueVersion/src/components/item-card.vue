<!-- SCRIPT ---------------------------------------------------------------------------------------------------------------->

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { ItemDetailResponse } from '../interfaces/item-detail';
import { ItemService } from '../services/item-service';

interface Props {
  itemId: number
}
const props = defineProps<Props>()

const item = ref<ItemDetailResponse>()

const img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/';

onMounted(async () => {
  if (props.itemId) {
    try {
      const response = await ItemService.getOneItem(props.itemId)
      item.value = response.data
    } catch (error) {
      console.error('Error al obtener los detalles del Item:', error)
    }
  }
})

function getImage(name: string): string {
    return `${img}${name}.png`
}

function getItemId(url: string): number {
    return parseInt(url.split('/')[6])
}
</script>

<!-- TEMPLATE -------------------------------------------------------------------------------------------------------------->

<template>
    <!--RouterLink :to="`/item-detail/${item?Id}`" class="text-decoration-none"-->
        <div class="card border-0 mx-3 my-4" style="width: 290px;">
            <!--Parte superior-->
            <div class="border-5 rounded-4 bordeCaja sombreado" style="background-color: rgb(154, 214, 223, .4);">
                <img :src="getImage(item.name)" :alt="item.name" class="card-img-top rounded-4">
            </div>
            <!--Parte inferior-->
            <div class="container d-flex justify-content-between card-body rounded-4 mt-1 px-2 fondoNegro sombreado">
                <div class="ms-2">
                    <h5 class="card-title text-light m-0 text-capitalize tipografia">{{ item?.name }}</h5>
                </div>
            </div>
        </div>
    <!--/RouterLink-->
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

a:hover h5{
    color: #ff6b6b !important;
}
</style>