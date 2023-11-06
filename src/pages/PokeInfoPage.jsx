import { useContext, useEffect } from "react";
import { PokeLayoutContext } from "../contexts/PokeLayoutContext";
import PokeInfoCard from "../components/pokeInfoPage/PokeInfoCard";
import "../css/PokeInfo.css";

export default function PokeInfoPage() {
  const pokeLayoutContext = useContext(PokeLayoutContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="row justify-content-center mb-3">
      {pokeLayoutContext.pokeTeam.length == 0 ? (
        <div className="container d-flex flex-column align-items-center">
          <div className="poke_loading_block"></div>
          <div className="col-8 col-md-7 col-xl-5 col-xxl-4 text-center fw-bold my-5 rounded">
            <p className="m-0 p-2 text-white rounded poke_info_loading">
              PLEASE ADD POKEMONS TO THE TEAM TO SEE THEIR STATS
            </p>
          </div>
        </div>
      ) : (
        <div className="poke_info_block"></div>
      )}
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
