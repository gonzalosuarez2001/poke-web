import { useContext } from "react";
import PokeListCard from "../components/PokeListCard";
import { PokeContext } from "../contexts/PokeContext";

export default function PokeList() {
  const pokeContext = useContext(PokeContext);

  pokeContext.listPokemon();

  return (
    <div className="row justify-content-center">
      {pokeContext.pokeList.map((pokemon, index) => {
        return (
          <PokeListCard
            key={index}
            name={pokemon.name}
            img_url={pokemon.sprites.front_default}
            types={pokemon.types}
          />
        );
      })}
    </div>
  );
}
