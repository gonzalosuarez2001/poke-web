import { useContext } from "react";
import { PokeNavContext } from "../../contexts/PokeNavContext";
import PokeTeamCard from "./PokeTeamCard";
import PokeTeamEmptyCard from "./PokeTeamEmptyCard";
import "../../css/PokeTeam.css";
import "../../css/PokeTeamEmptyCard.css";

export default function PokeTeam() {
  const pokeNavContext = useContext(PokeNavContext);

  let elements = [];
  for (let i = 0; i < pokeNavContext.pokeTeamEmptyPlaces; i++) {
    elements.push(<PokeTeamEmptyCard key={i} />);
  }

  return (
    <div
      className={`${pokeNavContext.teamView} row justify-content-center container-fluid rounded bg-light py-1 poke_team`}
    >
      {pokeNavContext.pokeTeam.map((pokemon) => (
        <PokeTeamCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          img_url={pokemon.img_url}
        />
      ))}
      {elements}
    </div>
  );
}
