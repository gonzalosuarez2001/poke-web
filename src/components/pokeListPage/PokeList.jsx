import { useContext } from "react";
import PokeListCard from "./PokeListCard";
import { PokeContext } from "../../contexts/PokeContext";
import "../../css/PokeList.css";

export default function PokeList() {
  const pokeContext = useContext(PokeContext);

  pokeContext.listPokemon();

  if (pokeContext.loadingPokeList == true) {
    return (
      <div className="container d-flex flex-column align-items-center">
        <div className="poke_loading_block"></div>
        <div className="col-11 text-center fw-bold my-5 rounded loading">
          <p className="m-0 p-2 text-secondary">Loading Pokemons</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row justify-content-center">
        <div className="poke_list_block"></div>
        {pokeContext.pokeList.map((pokemon) => {
          return (
            <PokeListCard
              key={pokemon.id}
              pokedex_id={pokemon.id}
              name={pokemon.name}
              front_sprite={pokemon.sprites.front_default}
              back_sprite={pokemon.sprites.back_default}
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
}
