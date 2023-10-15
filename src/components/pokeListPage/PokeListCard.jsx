import PropTypes from "prop-types";
import "../../css/PokeListCard.css";
import { PokeContext } from "../../contexts/PokeContext";
import { useContext } from "react";
import PokeCardTypes from "../others/PokeCardTypes";

export default function PokeListCard(props) {
  const pokeContext = useContext(PokeContext);

  const name = props.name.charAt(0).toUpperCase() + props.name.slice(1);

  return (
    <div className="col-9 col-sm-5 col-md-3 col-xl-2 col-xxl-2 text-center rounded poke_list_card m-2 px-2">
      <h4 className="pt-3 text-secondary fw-bold">{name}</h4>
      <img className="pt-3 col-5" src={props.img_url} />
      <div className="row justify-content-center pt-3">
        {props.types.map((type, index) => {
          return <PokeCardTypes key={index} type={type.type.name} />;
        })}
      </div>
      <button
        onClick={() => pokeContext.addPokemon(name, props.img_url)}
        className="btn btn-primary col-12 my-3"
      >
        Add to Team
      </button>
    </div>
  );
}

PokeListCard.propTypes = {
  img_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.array.isRequired,
};
