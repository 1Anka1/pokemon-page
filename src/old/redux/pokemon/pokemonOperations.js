import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const getPokemonByName = createAsyncThunk(
  'pokemon-id',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.get(`pokemon/${credentials}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllPokemon = createAsyncThunk(
  'pokemon',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `pokemon??offset=${credentials}&limit=${credentials}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
