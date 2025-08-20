import { Route, Routes } from 'react-router';
import Layout from './shared/Layout';
import { PokemonDetails } from './pages/PokemonDetails/PokemonDetails';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="pokemon/:name" element={<PokemonDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
