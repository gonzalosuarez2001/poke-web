import { useContext } from "react";
import PropTypes from "prop-types";
import "../css/PokeTeamCard.css";
import { PokeContext } from "../contexts/PokeContext";

export default function PokeTeamCard(props) {
  const pokeContext = useContext(PokeContext);

  return (
    <div className="col-9 col-sm-5 col-md-3 col-xl-2 col-xxl-2 text-center rounded poke_team_card m-2">
      <h4 className="pt-3 text-secondary">{props.name}</h4>
      <img className="pt-3 col-5" src={props.img_url} />
      <button
        onClick={() => pokeContext.removePokemon(props.id)}
        className="btn btn-danger col-12 my-3"
      >
        Eliminar
      </button>
    </div>
  );
}

PokeTeamCard.propTypes = {
  img_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
