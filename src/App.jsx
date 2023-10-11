import { useState } from "react";
import PokeList from "./pages/PokeList";
import PokeTeam from "./pages/PokeTeam";
import PokeNav from "./pages/PokeNav";
import { PokeContext } from "./contexts/PokeContext";

function App() {
  const [pokeList, setPokeList] = useState([]);
  const [loadingPokeList, setLoadingPokeList] = useState(true);
  const [pokeTeam, setPokeTeam] = useState([]);
  const [pokeTeamEmptyPlaces, setPokeTeamEmptyPlaces] = useState(6);
  const [pokeTeamId, setPokeTeamId] = useState(0);
  const [teamView, setTeamView] = useState("hide_team");

  async function listPokemon() {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=50");
      const data = await res.json();
      const names = await data.results.map((pokemon) => pokemon.name);

      const pokeInfo = [];
      for (const name of names) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await res.json();
        pokeInfo.push(data);
      }
      setPokeList(pokeInfo);
      setLoadingPokeList(false);
    } catch (error) {
      console.error("Error fetching pokemons:", error);
    }
  }

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
    <>
      <PokeContext.Provider
        value={{
          listPokemon,
          addPokemon,
          removePokemon,
          handleTeamView,
          pokeList,
          pokeTeam,
          pokeTeamEmptyPlaces,
          loadingPokeList,
        }}
      >
        <PokeNav />
        <PokeList />
        <PokeTeam teamView={teamView} />
      </PokeContext.Provider>
    </>
  );
}

export default App;
