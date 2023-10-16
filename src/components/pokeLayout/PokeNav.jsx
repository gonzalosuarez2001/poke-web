import { useContext } from "react";
import { PokeNavContext } from "../../contexts/PokeNavContext";
import "../../css/PokeNav.css"

export default function PokeNav() {
  const pokeNavContext = useContext(PokeNavContext);

  return (
    <div className="container-fluid m-0 bg-light row justify-content-center poke_nav">
      <button
        onClick={() => pokeNavContext.handleTeamView()}
        className="btn btn-primary col-6 col-md-5 col-lg-4 my-2"
      >
        Show Team
      </button>
    </div>
  );
}
