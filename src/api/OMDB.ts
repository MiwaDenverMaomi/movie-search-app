import axios from 'axios';

export const apiKey = 'bc34282a';
export const OMDB = axios.create({ baseURL: `http://www.omdbapi.com/`});
