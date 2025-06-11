<!-- SCRIPT ---------------------------------------------------------------------------------------------------------------->

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { ItemService } from '../services/item-service';
import { Item, ItemListResponse } from '../interfaces/item';
import ItemCard from './item-card.vue'

const listItem = ref<Item[]>([])

const img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/';

onMounted(async () => {
  try {
    const response = await ItemService.getItems()
    const data = response.data as ItemListResponse
    listItem.value = data.results
  } catch (error) {
    console.error('Error al obtener la lista de Pokémon:', error)
  }
})

/*function getImage(name: string): string {
    return `${img}${name}.png`
}*/

function getItemId(url: string): number {
    return parseInt(url.split('/')[6])
}
</script>

<!-- TEMPLATE -------------------------------------------------------------------------------------------------------------->

<template>
    <div class="container mt-5 pt-5">
        <div class="row mt-5">
            <div v-for="item in listItem" :key="item.name" class="col-md-3 col-12 p-2 my-3">
                <ItemCard :itemId="getItemId(item.url)" style="width: fit-content"></ItemCard>
            </div>
        </div>
    </div>
</template>

<!-- STYLE ----------------------------------------------------------------------------------------------------------------->

<style scoped>

</style>