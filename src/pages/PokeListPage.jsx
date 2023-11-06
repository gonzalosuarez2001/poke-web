import { useState, useEffect } from "react";
import PokeList from "../components/pokeListPage/PokeList";
import { PokeContext } from "../contexts/PokeContext";

export default function PokeListPage() {
  const [pokeList, setPokeList] = useState([]);
  const [loadingPokeList, setLoadingPokeList] = useState(true);
  const [page, setPage] = useState(0);

  async function listPokemon(page) {
    try {
      setLoadingPokeList(true);
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?limit=50&offset=${page}0`
      );
      const data = await res.json();
      const names = await data.results.map((pokemon) => pokemon.name);

      const pokeInfo = [];
      for (const name of names) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await res.json();
        pokeInfo.push({
          id: data.id,
          name: data.name,
          front_sprite: data.sprites.front_default,
          back_sprite: data.sprites.back_default,
          types: data.types,
          stats: data.stats,
          height: data.height,
          weight: data.weight,
        });
      }
      setPokeList(pokeInfo);
      setLoadingPokeList(false);
    } catch (error) {
      console.error("Error fetching pokemons:", error);
    }
  }

  function previousPage() {
    if (!loadingPokeList && page > 0) {
      setPage(page - 5);
    }
  }

  function nextPage() {
    if (!loadingPokeList && page < 125) {
      setPage(page + 5);
    }
  }

  function minPage() {
    if (!loadingPokeList) {
      setPage(0);
    }
  }

  function maxPage() {
    if (!loadingPokeList) {
      setPage(125);
    }
  }

  useEffect(() => {
    listPokemon(page);
  }, [page]);

  return (
    <>
      <PokeContext.Provider
        value={{
          pokeList,
          previousPage,
          nextPage,
          minPage,
          maxPage,
        }}
      >
        <PokeList loadingPokeList={loadingPokeList} />
      </PokeContext.Provider>
    </>
  );
}
