import { useContext } from "react";
import PropTypes from "prop-types";
import "../../css/PokeTeamCard.css";
import { PokeNavContext } from "../../contexts/PokeNavContext";

export default function PokeTeamCard(props) {
  const pokeNavContext = useContext(PokeNavContext);

  return (
    <div className="col-12 text-center rounded poke_team_card my-1">
      <img className="pt-3 col-12" src={props.img_url} />
      <button
        onClick={() => pokeNavContext.removePokemon(props.id)}
        className="btn btn-danger col-12 my-2"
      >
        Delete
      </button>
    </div>
  );
}

PokeTeamCard.propTypes = {
  img_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
