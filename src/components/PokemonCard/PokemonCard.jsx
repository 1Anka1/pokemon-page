import { useParams } from 'react-router-dom';
import { usePokemonByName } from '../../hooks/usePokemon';
import { BackButton } from '../../shared/ui/BackButton/BackButton';
import { RiVoiceprintFill } from 'react-icons/ri';

export const PokemonCard = () => {
  const { name } = useParams();
  const { data: pokemonData } = usePokemonByName(name);
  console.log(pokemonData);

  const playCry = () => {
    console.log(pokemonData?.cries.latest);

    if (!pokemonData?.cries?.latest) return;
    const audio = new Audio(pokemonData.cries.latest);
    audio.play();
  };

  return (
    // <>
    //   <BackButton />
    //   <div
    //     key={pokemonData?.id}
    //     className="flex flex-col items-center p-4 border-t-emerald-300 border rounded-md "
    //   >
    //     <div className="place-items-center">
    //       <h2 className="text-2xl font-bold">
    //         {name.charAt(0).toUpperCase() + name.slice(1)}
    //       </h2>
    //       <img
    //         src={pokemonData?.sprites.front_default}
    //         alt={name}
    //         className="w-80 h-80"
    //       />
    //       <ul>
    //         Abilities:
    //         {pokemonData.abilities.map(({ ability }) => (
    //           <li key={ability.name}>{ability.name}</li>
    //         ))}
    //       </ul>
    //       <p>Base experience: {pokemonData?.base_experience}</p>
    //       <p>Height: {pokemonData?.height}</p>
    //       <p>Weight: {pokemonData?.weight}</p>
    //       <button
    //         className="flex items-center bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded mt-7 gap-3 text-lg"
    //         onClick={playCry}
    //       >
    //         <RiVoiceprintFill />
    //         Hear me!
    //       </button>
    //     </div>
    //   </div>
    // </>
    <>
      <BackButton />
      <div className="max-w-md mx-auto mt-6 p-8 rounded-2xl shadow-xl border flex flex-col items-center">
        <h2 className="text-3xl font-extrabold text-black-600 mb-4">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h2>

        <img
          src={pokemonData?.sprites.front_default}
          alt={name}
          className="w-64 h-64 md:w-80 md:h-80"
        />

        <div className="w-full">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Abilities:
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {pokemonData?.abilities.map(({ ability }) => (
              <li key={ability.name} className="capitalize">
                {ability.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 w-full flex justify-between gap-4 text-gray-700">
          <p>
            <span className="font-semibold">Base Exp:</span>{' '}
            {pokemonData?.base_experience}
          </p>
          <p>
            <span className="font-semibold">Height:</span> {pokemonData?.height}
          </p>
          <p>
            <span className="font-semibold">Weight:</span> {pokemonData?.weight}
          </p>
        </div>

        <button
          className="mt-6 flex items-center gap-3 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-6 border-b-4 border-red-700 hover:border-red-500 rounded-xl text-lg transition-all duration-200 shadow-md hover:shadow-lg"
          onClick={playCry}
        >
          <RiVoiceprintFill className="text-xl" />
          Hear me!
        </button>
      </div>
    </>
  );
};
