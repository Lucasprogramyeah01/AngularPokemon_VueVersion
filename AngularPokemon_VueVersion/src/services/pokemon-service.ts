import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const PokemonService = {
  getPokemonList() {
    return api.get('pokemon/');
  },

  getPokemon(id: number) {
    return api.get(`pokemon/${id}/`);
  },

  getDesCatPokemon(id: number) {
    return api.get(`pokemon-species/${id}/`);
  }
};
