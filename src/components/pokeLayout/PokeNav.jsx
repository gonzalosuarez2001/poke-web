import { useContext } from "react";
import { Link } from "react-router-dom";
import { PokeLayoutContext } from "../../contexts/PokeLayoutContext";
import "../../css/PokeNav.css";
import { useLocation } from "react-router-dom";

export default function PokeNav() {
  const pokeLayoutContext = useContext(PokeLayoutContext);
  const url = useLocation().pathname;

  return (
    <div className="container-fluid m-0 bg-light row justify-content-center poke_nav">
      <Link className="text-white col-3 col-xl-2 m-2 p-0" to="/">
        <button className={`${
            url === "/" ? "active" : ""
          } btn btn-primary col-12 fw-bold`}>LIST</button>
      </Link>

      <button
        onClick={() => pokeLayoutContext.handleTeamView()}
        className="btn btn-danger col-3 col-xl-2 m-2 fw-bold text-white"
      >
        TEAM
      </button>

      <Link className="text-white col-3 col-xl-2 m-2 p-0" to="/pokeinfo">
        <button
          className={`${
            url === "/pokeinfo" ? "active" : ""
          } btn btn-primary col-12 fw-bold`}
        >
          INFO
        </button>
      </Link>
    </div>
  );
}
