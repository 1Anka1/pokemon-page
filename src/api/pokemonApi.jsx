import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const getPokemonByName = async (name) => {
  try {
    const { data } = await axios.get(`pokemon/${name}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getAllPokemon = async (limit) => {
  try {
    const { data } = await axios.get(`pokemon?offset=0&limit=${limit}`);
    return data;
  } catch (error) {
    throw error;
  }
};
