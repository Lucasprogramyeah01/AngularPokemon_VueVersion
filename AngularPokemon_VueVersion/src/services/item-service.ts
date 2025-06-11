import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const ItemService = {
  getItems() {
    return api.get('item/');
  },

  getOneItem(id: number) {
    return api.get(`item/${id}/`);
  }
};