import { PokemonCard } from "./pokemon-card";

interface PokemonGridProps {
    pokemonList: any[];
}

export function PokemonGrid({ pokemonList }: PokemonGridProps) {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {pokemonList.map((pokemon) => (
                <PokemonCard name={pokemon.name} key={pokemon.name + "Card"} />
            ))}
        </div>
    );
}
