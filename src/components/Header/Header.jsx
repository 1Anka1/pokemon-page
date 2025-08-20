import { MdCatchingPokemon } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="flex justify-center mt-8">
      <Link
        to="/"
        className="text-5xl font-extrabold flex flex-row items-center"
      >
        Pokem
        <MdCatchingPokemon color="red" />
        ns
      </Link>
    </header>
  );
};
