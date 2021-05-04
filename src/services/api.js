import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api',
  //baseURL: 'https://swapi.dev/api/',
});
