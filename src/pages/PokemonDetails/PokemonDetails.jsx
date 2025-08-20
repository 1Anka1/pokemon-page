import React from 'react';
import { Section } from '../../shared/ui/Section/Section';
import { Container } from '../../shared/ui/Container/Container';
import { PokemonCard } from '../../components/PokemonCard/PokemonCard';

export const PokemonDetails = () => {
  return (
    <Section>
      <Container>
        <PokemonCard />
      </Container>
    </Section>
  );
};
