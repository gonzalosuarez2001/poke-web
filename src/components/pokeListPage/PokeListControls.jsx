import { useContext } from "react";
import { PokeContext } from "../../contexts/PokeContext";
import "../../css/PokeListControls.css";

export default function PokeListControls() {
  const pokeContext = useContext(PokeContext);

  return (
    <div className="row justify-content-center mb-3">
      <button
        onClick={() => pokeContext.minPage()}
        className="btn btn-bg fw-bold mx-2 col-1 d-flex justify-content-center align-items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-chevron-bar-left poke_list_controls_icon"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0zM4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z"
          />
        </svg>
      </button>
      <button
        onClick={() => pokeContext.previousPage()}
        className="btn btn-bg fw-bold mx-2 col-3 col-xl-2"
      >
        Previous
      </button>
      <button
        onClick={() => pokeContext.nextPage()}
        className="btn btn-bg fw-bold mx-2 col-3 col-xl-2"
      >
        Next
      </button>
      <button
        onClick={() => pokeContext.maxPage()}
        className="btn btn-bg fw-bold mx-2 col-1 d-flex justify-content-center align-items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-chevron-bar-right poke_list_controls_icon"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0zM11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"
          />
        </svg>
      </button>
    </div>
  );
}
