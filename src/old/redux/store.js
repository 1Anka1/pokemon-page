import { configureStore } from '@reduxjs/toolkit';
import { pokemonSlice } from './pokemon/pokemonReducer';

export const store = configureStore({
  reducer: {
    [pokemonSlice.name]: pokemonSlice.reducer,
  },
});
