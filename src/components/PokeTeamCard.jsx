import { useContext } from "react";
import PropTypes from "prop-types";
import "../css/PokeTeamCard.css";
import { PokeContext } from "../contexts/PokeContext";

export default function PokeTeamCard(props) {
  const pokeContext = useContext(PokeContext);

  return (
    <div className="col-11 text-center rounded poke_team_card my-1">
      {/*<h4 className="pt-3 text-secondary">{props.name}</h4>*/}
      <img className="pt-3 col-12" src={props.img_url} />
      <button
        onClick={() => pokeContext.removePokemon(props.id)}
        className="btn btn-danger col-12 my-2"
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
