import { useContext } from "react";
import PokeListCard from "./PokeListCard";
import { PokeContext } from "./PokeContext";

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
            img_url={pokemon.img_url}
          />
        );
      })}
    </div>
  );
}
