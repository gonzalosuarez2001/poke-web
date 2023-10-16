import { useContext } from "react";
import PropTypes from "prop-types";
import "../../css/PokeTeamCard.css";
import { PokeLayoutContext } from "../../contexts/PokeLayoutContext";

export default function PokeTeamCard(props) {
  const pokeLayoutContext = useContext(PokeLayoutContext);

  return (
    <div className="col-12 text-center rounded poke_team_card my-1">
      <img className="pt-3 col-12" src={props.img_url} />
      <button
        onClick={() => pokeLayoutContext.removePokemon(props.id)}
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
