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
  
      const listResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=50&offset=${page}`);
      const listData = await listResponse.json();
      const names = listData.results.map((pokemon) => pokemon.name);
  
      const pokeInfo = await Promise.all(
        names.map(async (name) => {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
          const data = await res.json();
  
          if (data.sprites.front_default) {
            return {
              id: data.id,
              name: data.name,
              front_sprite: data.sprites.front_default,
              back_sprite: data.sprites.back_default,
              types: data.types,
              stats: data.stats,
              height: data.height,
              weight: data.weight,
            };
          }
          return null;
        })
      );
  
      const filteredPokeInfo = pokeInfo.filter((info) => info !== null);
  
      setPokeList(filteredPokeInfo);
      //setLoadingPokeList(false);
    } catch (error) {
      console.error("Error fetching pokemons:", error);
    }
  }

  function previousPage() {
    if (!loadingPokeList && page > 0) {
      setPage(page - 50);
    }
  }

  function nextPage() {
    if (!loadingPokeList && page < 1250) {
      setPage(page + 50);
    }
  }

  function minPage() {
    if (!loadingPokeList) {
      setPage(0);
    }
  }

  function maxPage() {
    if (!loadingPokeList) {
      setPage(1250);
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
