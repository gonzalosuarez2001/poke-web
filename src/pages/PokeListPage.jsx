import { useState } from "react";
import PokeList from "../components/pokeListPage/PokeList";
import { PokeContext } from "../contexts/PokeContext";

export default function PokeListPage() {
  const [pokeList, setPokeList] = useState([]);
  const [loadingPokeList, setLoadingPokeList] = useState(true);

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

  return (
    <>
      <PokeContext.Provider
        value={{
          listPokemon,
          pokeList,
          loadingPokeList,
        }}
      >
        <PokeList />
      </PokeContext.Provider>
    </>
  );
}
