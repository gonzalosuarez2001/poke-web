import { createContext, useState } from "react";
import { PropTypes } from "prop-types";

export const PokeLayoutContext = createContext();

export function PokeLayoutContextProvider({ children }) {
  const [pokeTeam, setPokeTeam] = useState([]);
  const [pokeTeamEmptyPlaces, setPokeTeamEmptyPlaces] = useState(6);
  const [pokeTeamId, setPokeTeamId] = useState(0);
  const [teamView, setTeamView] = useState("hide_team");

  function addPokemon(
    pokedex_id,
    name,
    front_sprite,
    back_sprite,
    types,
    stats,
    height,
    weight
  ) {
    if (pokeTeam.length < 6) {
      setPokeTeam([
        ...pokeTeam,
        {
          id: pokeTeamId,
          pokedex_id,
          name,
          front_sprite,
          back_sprite,
          types,
          stats,
          height,
          weight,
        },
      ]);
      setPokeTeamId(pokeTeamId + 1);
      setPokeTeamEmptyPlaces(pokeTeamEmptyPlaces - 1);
    }
  }

  function removePokemon(id) {
    const newPokeTeam = pokeTeam.filter((pokemon) => pokemon.id != id);
    setPokeTeam(newPokeTeam);
    setPokeTeamEmptyPlaces(pokeTeamEmptyPlaces + 1);
  }

  function handleTeamView() {
    if (teamView == "show_team") {
      setTeamView("hide_team");
    } else {
      setTeamView("show_team");
    }
  }

  return (
    <PokeLayoutContext.Provider
      value={{
        addPokemon,
        removePokemon,
        handleTeamView,
        teamView,
        pokeTeam,
        pokeTeamEmptyPlaces,
      }}
    >
      {children}
    </PokeLayoutContext.Provider>
  );
}

PokeLayoutContextProvider.propTypes = {
  children: PropTypes.node,
};
