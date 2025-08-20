import { createSlice } from '@reduxjs/toolkit';
import { getAllPokemon, getPokemonByName } from './pokemonOperations';

const initialState = {
  pokemonsList: [],
  pokemonsDetail: [],
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  extraReducers: (builder) =>
    builder
      //getPokemonByName
      .addCase(getPokemonByName.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPokemonByName.fulfilled, (state, { payload }) => {
        state.pokemonsDetail = payload;

        state.isLoading = false;
      })
      .addCase(getPokemonByName.rejected, (state) => state)

      // getAllPokemon
      .addCase(getAllPokemon.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllPokemon.fulfilled, (state, { payload }) => {
        state.pokemonsList = payload.results;

        state.isLoading = false;
      })
      .addCase(getAllPokemon.rejected, (state) => state),
});
