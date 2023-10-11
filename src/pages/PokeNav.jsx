import { useContext } from "react";
import { PokeContext } from "../contexts/PokeContext";
import "../css/PokeNav.css"

export default function PokeNav() {
  const pokeContext = useContext(PokeContext);

  return (
    <div className="container-fluid bg-light poke_nav">
      <button
        onClick={() => pokeContext.handleTeamView()}
        className="btn btn-primary col-12 my-2"
      >
        Show Team
      </button>
    </div>
  );
}
