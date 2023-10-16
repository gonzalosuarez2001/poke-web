import { useContext } from "react";
import { Link } from "react-router-dom";
import { PokeLayoutContext } from "../../contexts/PokeLayoutContext";
import "../../css/PokeNav.css";

export default function PokeNav() {
  const pokeLayoutContext = useContext(PokeLayoutContext);

  return (
    <div className="container-fluid m-0 bg-light row justify-content-center poke_nav">
      <Link className="text-white col-3 m-2 p-0" to="/">
        <button className="btn btn-primary col-12"> List</button>
      </Link>

      <button
        onClick={() => pokeLayoutContext.handleTeamView()}
        className="btn btn-primary col-3 m-2"
      >
        Team
      </button>

      <Link className="text-white col-3 m-2 p-0" to="/pokeinfo">
        <button className="btn btn-primary col-12">Info</button>
      </Link>
    </div>
  );
}
