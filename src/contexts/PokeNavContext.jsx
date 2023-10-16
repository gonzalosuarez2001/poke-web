import { createContext, useState } from "react";
import { PropTypes } from "prop-types";

export const PokeNavContext = createContext();

export function PokeNavContextProvider({ children }) {
  const [pokeTeam, setPokeTeam] = useState([]);
  const [pokeTeamEmptyPlaces, setPokeTeamEmptyPlaces] = useState(6);
  const [pokeTeamId, setPokeTeamId] = useState(0);
  const [teamView, setTeamView] = useState("hide_team");

  function addPokemon(name, img_url) {
    if (pokeTeam.length < 6) {
      setPokeTeam([...pokeTeam, { id: pokeTeamId, name, img_url }]);
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
    <PokeNavContext.Provider
      value={{ addPokemon, removePokemon, handleTeamView, teamView, pokeTeam, pokeTeamEmptyPlaces }}
    >
      {children}
    </PokeNavContext.Provider>
  );
}

PokeNavContextProvider.propTypes = {
  children: PropTypes.node,
};
