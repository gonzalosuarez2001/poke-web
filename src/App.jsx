import { useState } from "react";
import PokeList from "./PokeList";
import PokeTeam from "./PokeTeam";
import { PokeContext } from "./PokeContext";

function App() {
  const [pokeList, setPokeList] = useState([]);
  const [pokeTeam, setPokeTeam] = useState([]);
  const [pokeTeamEmptyPlaces, setPokeTeamEmptyPlaces] = useState(6);
  const [pokeTeamId, setPokeTeamId] = useState(0);
  const [teamView, setTeamView] = useState("hide_team");

  async function listPokemon() {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=50");
      const data = await res.json();
      const names = await data.results.map((pokemon) => pokemon.name);

      const sprites = [];
      for (const name of names) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await res.json();
        sprites.push(data.sprites.front_default);
      }
      const pokeList = names.map((name, index) => ({
        name: name,
        img_url: sprites[index],
      }));
      setPokeList(pokeList);
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
    <div>
      <div className="container-fluid">
        <button
          onClick={() => handleTeamView()}
          className="btn btn-primary col-12 my-2"
        >
          Mostra Equipo
        </button>
      </div>
      <PokeContext.Provider
        value={{ listPokemon, addPokemon, removePokemon, pokeList, pokeTeam, pokeTeamEmptyPlaces }}
      >
        <PokeList />
        <PokeTeam teamView={teamView} />
      </PokeContext.Provider>
    </div>
  );
}

export default App;
