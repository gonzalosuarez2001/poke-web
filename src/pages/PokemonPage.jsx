//import { useContext } from "react";
//import { PokeLayoutContext } from "../contexts/PokeLayoutContext";
import { useParams } from "react-router-dom";

export default function PokemonPage() {
  //const pokeLayoutContext = useContext(PokeLayoutContext);
  const { name } = useParams();

  return (
    <div>
      <div className="poke_list_block"></div>
      <div className="">
        <p>{name}</p>
      </div>
    </div>
  );
}
