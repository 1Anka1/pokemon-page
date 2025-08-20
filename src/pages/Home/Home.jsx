import { Section } from '../../shared/ui/Section/Section';
import { Container } from '../../shared/ui/Container/Container';
import { PokemonList } from '../../components/PokemonList/PokemonList';

export const Home = () => {
  return (
    <Section>
      <Container>
        <PokemonList />
      </Container>
    </Section>
  );
};
