import { useContext } from "react";
import { PokeContext } from "../contexts/PokeContext";
import "../css/PokeNav.css"

export default function PokeNav() {
  const pokeContext = useContext(PokeContext);

  return (
    <div className="container-fluid m-0 bg-light row justify-content-center poke_nav">
      <button
        onClick={() => pokeContext.handleTeamView()}
        className="btn btn-primary col-6 col-md-5 col-lg-4 my-2"
      >
        Show Team
      </button>
    </div>
  );
}
