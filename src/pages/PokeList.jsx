import { useContext } from "react";
import PokeListCard from "../components/PokeListCard";
import { PokeContext } from "../contexts/PokeContext";
import "../css/PokeList.css";

export default function PokeList() {
  const pokeContext = useContext(PokeContext);

  pokeContext.listPokemon();

  if (pokeContext.loadingPokeList == true) {
    return (
      <div className="container d-flex justify-content-center">
      <div className="col-11 text-center fw-bold my-5 rounded loading">
        <p className="m-0 p-2 text-secondary">Loading Pokemons</p>
      </div>
      </div>
    );
  } else {
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
}
