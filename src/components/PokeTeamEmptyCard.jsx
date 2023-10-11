import "../css/PokeTeamEmptyCard.css";
import pokeBallImage from "../../public/pokeBall.png"

export default function PokeTeamEmptyCard() {
  return (
    <div className="col-11 d-flex justify-content-center align-items-center rounded poke_team_empty_card m-1">
      <img className="col-6" src={pokeBallImage}/>
    </div>
  );
}
