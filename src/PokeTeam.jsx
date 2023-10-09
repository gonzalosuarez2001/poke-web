import { useContext } from "react";
import { PokeContext } from "./PokeContext";
import PokeTeamCard from "./PokeTeamCard";
import PropTypes from "prop-types";
import PokeTeamEmptyCard from "./PokeTeamEmptyCard";
import "./css/PokeTeam.css";
import "./css/PokeTeamEmptyCard.css";

export default function PokeTeam(props) {
  const pokeContext = useContext(PokeContext);

  let elements = [];
  for (let i = 0; i < pokeContext.pokeTeamEmptyPlaces; i++) {
    elements.push(<PokeTeamEmptyCard key={i}/>);
  }

  return (
    <div
      className={`${props.teamView} row justify-content-center container-fluid rounded border bg-light poke_team`}
    >
      {pokeContext.pokeTeam.map((pokemon) => {
        return (
          <PokeTeamCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            img_url={pokemon.img_url}
          />
        );
      })}
      {elements}
    </div>
  );
}

PokeTeam.propTypes = {
  teamView: PropTypes.string.isRequired,
};
