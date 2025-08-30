import { getAllPokemon, getPokemonByName } from '../api/pokemonApi';
import { useQuery, keepPreviousData } from '@tanstack/react-query';

export const useAllPokemon = (limit) => {
  return useQuery({
    queryKey: ['pokemon', limit],
    queryFn: () => getAllPokemon(limit),
    placeholderData: keepPreviousData,
  });
};

export const usePokemonByName = (name) => {
  return useQuery({
    queryKey: ['pokemon', name],
    queryFn: () => getPokemonByName(name),
    staleTime: 1000 * 60,
  });
};
