import { useContext } from "react";
import { PokeLayoutContext } from "../contexts/PokeLayoutContext";
import PokeInfoCard from "../components/pokeInfo/PokeInfoCard";
import "../css/PokeInfo.css"

export default function PokeInfoPage() {
  const pokeLayoutContext = useContext(PokeLayoutContext);

  return (
    <div className="row justify-content-center mb-3">
      <div className="poke_info_block"></div>
      {pokeLayoutContext.pokeTeam.map((pokemon) => {
        return (
          <PokeInfoCard
            key={pokemon.id}
            pokedex_id={pokemon.pokedex_id}
            name={pokemon.name}
            front_sprite={pokemon.front_sprite}
            back_sprite={pokemon.back_sprite}
            types={pokemon.types}
            stats={pokemon.stats}
            height={pokemon.height}
            weight={pokemon.weight}
          />
        );
      })}
    </div>
  );
}
