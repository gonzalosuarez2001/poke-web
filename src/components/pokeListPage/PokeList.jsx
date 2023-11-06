import { useContext } from "react";
import PokeListCard from "./PokeListCard";
import PropTypes from "prop-types";
import { PokeContext } from "../../contexts/PokeContext";
import PokeListControls from "./PokeListControls";
import "../../css/PokeList.css";

export default function PokeList(props) {
  const pokeContext = useContext(PokeContext);

  return (
    <>
      <div className="poke_list_block"></div>
      <PokeListControls />
      {props.loadingPokeList ? (
        <div className="container d-flex flex-column align-items-center">
          <div className="col-11 text-center fw-bold my-5 rounded loading">
            <p className="m-0 p-2 text-white">LOADING POKEMONS</p>
          </div>
        </div>
      ) : (
        <div className="row justify-content-center mb-3 p-0">
          {pokeContext.pokeList.map((pokemon) => (
            <PokeListCard
              key={pokemon.id}
              pokedex_id={pokemon.id}
              name={pokemon.name}
              front_sprite={pokemon.front_sprite}
              back_sprite={pokemon.back_sprite}
              types={pokemon.types}
              stats={pokemon.stats}
              height={pokemon.height}
              weight={pokemon.weight}
            />
          ))}
        </div>
      )}
    </>
  );
}

PokeList.propTypes = {
  loadingPokeList: PropTypes.bool.isRequired,
};
