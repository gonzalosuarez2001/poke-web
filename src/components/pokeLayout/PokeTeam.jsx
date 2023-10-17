import { useContext } from "react";
import { PokeLayoutContext } from "../../contexts/PokeLayoutContext";
import PokeTeamCard from "./PokeTeamCard";
import PokeTeamEmptyCard from "./PokeTeamEmptyCard";
import "../../css/PokeTeam.css";
import "../../css/PokeTeamEmptyCard.css";

export default function PokeTeam() {
  const pokeLayoutContext = useContext(PokeLayoutContext);

  let elements = [];
  for (let i = 0; i < pokeLayoutContext.pokeTeamEmptyPlaces; i++) {
    elements.push(<PokeTeamEmptyCard key={i} />);
  }

  return (
    <div
      className={`${pokeLayoutContext.teamView} row justify-content-center container-fluid rounded bg-light py-1 poke_team`}
    >
      {pokeLayoutContext.pokeTeam.map((pokemon) => (
        <PokeTeamCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          front_sprite={pokemon.front_sprite}
        />
      ))}
      {elements}
    </div>
  );
}
