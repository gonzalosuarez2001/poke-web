import PokeCardTypes from "../others/PokeCardTypes";
import PropTypes from "prop-types";
import "../../css/PokeInfoCard.css";

export default function PokeInfoCard(props) {
  return (
    <>
      <div className="col-9 col-sm-5 col-md-3 col-xl-2 col-xxl-2 text-center rounded m-2 px-2 poke_info_card">
        <h4 className="pt-3 text-secondary fw-bold">{props.name}</h4>
        <div>
          <img className="pt-3 mx-2 col-6" src={props.front_sprite} />
          <img className="pt-3 mx-2 col-6" src={props.back_sprite} />
        </div>
        <div className="row justify-content-center pt-3">
          {props.types.map((type, index) => {
            return <PokeCardTypes key={index} type={type.type.name} />;
          })}
        </div>
        <div className="row justify-content-center py-3">
          {props.stats.map((stat, index) => {
            return <p key={index}>{stat.stat.name.toUpperCase()} {stat.base_stat}</p>;
          })}
        </div>
      </div>
    </>
  );
}

PokeInfoCard.propTypes = {
  pokedex_id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  front_sprite: PropTypes.string.isRequired,
  back_sprite: PropTypes.string.isRequired,
  types: PropTypes.array.isRequired,
  stats: PropTypes.array.isRequired,
  height: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
};
