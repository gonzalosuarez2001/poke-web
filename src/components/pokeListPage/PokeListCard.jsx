import PropTypes from "prop-types";
import "../../css/PokeListCard.css";
import { PokeLayoutContext } from "../../contexts/PokeLayoutContext";
import { useContext, useState } from "react";
import PokeCardTypes from "../others/PokeCardTypes";

export default function PokeListCard(props) {
  const pokeLayoutContext = useContext(PokeLayoutContext);

  const name = props.name.charAt(0).toUpperCase() + props.name.slice(1);

  const [bg, setBg] = useState("white");

  function bgChange() {
    setBg("skyblue");
    setTimeout(() => {
      setBg("white");
    }, 100);
  }

  return (
    <div
      className={`${bg} col-9 col-sm-5 col-md-3 col-xl-2 col-xxl-2 text-center rounded m-2 px-2 poke_list_card`}
    >
      <h4 className="pt-3 text-secondary fw-bold poke_list_card_title">{name}</h4>
      <img className="pt-3 col-5" src={props.front_sprite} />
      <div className="row justify-content-center pt-3">
        {props.types.map((type, index) => {
          return <PokeCardTypes key={index} type={type.type.name} />;
        })}
      </div>
      <button
        onClick={() => {
          pokeLayoutContext.addPokemon(
            props.pokedex_id,
            name,
            props.front_sprite,
            props.back_sprite,
            props.types,
            props.stats,
            props.height,
            props.weight
          );
          bgChange();
        }}
        className="btn btn-primary col-12 p-1 my-3"
      >
        Add to Team
      </button>
      {/*
      <Link className="col-12 p-0" to={`/pokemon/${props.name}`}>
        <button className="btn btn-secondary p-1 mt-2 mb-3 col-12 text-white">View Info</button>
      </Link>
      */}
    </div>
  );
}

PokeListCard.propTypes = {
  pokedex_id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  front_sprite: PropTypes.string.isRequired,
  back_sprite: PropTypes.string.isRequired,
  types: PropTypes.array.isRequired,
  stats: PropTypes.array.isRequired,
  height: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
};
