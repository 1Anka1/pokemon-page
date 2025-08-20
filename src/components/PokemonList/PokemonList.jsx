// import { getAllPokemon } from '../../redux/pokemon/pokemonOperations';
// import { selectPokemonList } from '../../redux/pokemon/pokemonSelector';

// const pokemons = useSelector(selectPokemonList);
// const dispatch = useDispatch();
// useEffect(() => {
//   dispatch(getAllPokemon(limit));
// }, [dispatch, limit]);

import { useState } from 'react';
import { useAllPokemon } from '../../hooks/usePokemon';

import { TopUp } from '../../shared/ui/TopUp/TopUp';
import { Link } from 'react-router-dom';
import { Search } from '../../shared/ui/Search/Search';
import Loader from '../Loader/Loader';
import { useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const PokemonList = () => {
  const queryClient = useQueryClient();

  const [limit, setLimit] = useState(30);
  const [inputName, setInputName] = useState('');
  const { data: pokemons, isLoading } = useAllPokemon(limit);

  const filterByName = pokemons?.results.filter(({ name }) =>
    name.includes(inputName) ? name : ''
  );

  const getInputValue = (value) => {
    setInputName(value);
  };

  const handleChangeLimit = () => {
    setLimit((prev) => prev + 20);
  };

  const extractPokemonIdFromUrl = (url) => {
    const match = url.match(/\/pokemon\/(\d+)\//);
    return match ? match[1] : '';
  };

  const preFetchPokemons = async (name) => {
    await queryClient.prefetchQuery(
      ['pokemon', name],
      async () => {
        const { data } = await axios.get(`pokemon/${name}`);
        console.log(name);
        return data;
      },
      { staleTime: 1000 * 60 }
    );
  };

  return (
    <>
      <Search getInputValue={getInputValue} />
      <Loader isLoading={isLoading}>
        {filterByName?.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-4 ">
            {filterByName.map(({ name, url }) => {
              const id = extractPokemonIdFromUrl(url);

              return (
                <div
                  key={name}
                  className="border rounded-md transform bg-neutral-200 hover:bg-red-600  transition duration-500 hover:scale-110"
                >
                  <Link
                    onMouseEnter={() => preFetchPokemons(name)}
                    to={`/pokemon/${name}`}
                    className="flex flex-col items-center"
                  >
                    <h2 className="text-lg font-bold pt-4">
                      {name.charAt(0).toUpperCase() + name.slice(1)}
                    </h2>
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${id}.png`}
                      alt={name}
                      className="w-32 h-32"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <TopUp>Sorry, there is no Pokémon with that name.</TopUp>
        )}
      </Loader>

      <div className="flex justify-center mt-4">
        <button
          onClick={handleChangeLimit}
          type="button"
          className="bg-red-500 text-white px-7 py-3 rounded hover:bg-red-600 transition mb-8"
        >
          Load more
        </button>
      </div>
    </>
  );
};
