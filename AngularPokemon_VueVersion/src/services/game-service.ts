import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const GameService = {
  getGames() {
    return api.get('version/');
  }
};