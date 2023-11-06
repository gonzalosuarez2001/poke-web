import PokeCardTypes from "../others/PokeCardTypes";
import PropTypes from "prop-types";
import "../../css/PokeInfoCard.css";
import pokeBallImage from "../../../public/pokeBall.png"

export default function PokeInfoCard(props) {
  return (
    <>
      <div className="col-9 col-sm-5 col-xl-3 row justify-content-center rounded m-2 px-2 poke_info_card">
        <div className="col-12 text-center">
          <h4 className="pt-3 text-secondary fw-bold poke_info_card_title">{props.name}</h4>
          <div className="row justify-content-center">
            <img
              className="pt-3 mx-2 col-6 col-md-5"
              src={props.front_sprite}
            />
            {props.back_sprite ? (
              <img
                className="pt-3 mx-2 col-6 col-md-5"
                src={props.back_sprite}
              />
            ) : (
              <img
                className="pt-3 mx-2 col-6 col-md-5 poke_info_card_pokeball"
                src={pokeBallImage}
              />
            )}
          </div>

          <div className="row justify-content-center pt-3">
            {props.types.map((type, index) => {
              return <PokeCardTypes key={index} type={type.type.name} />;
            })}
          </div>
        </div>
        <div className="py-3 col-12">
          <div className="poke_info_card_stats row justify-content-center rounded py-1 mx-2 mx-md-3 mx-xl-2 mx-xxl-3">
            {props.stats.map((stat, index) => {
              return (
                <div className="col-12 col-md-6 p-0 row" key={index}>
                  <div className="col-9 col-md-12">
                    <p className="text-secondary fw-bold my-2">
                      {stat.stat.name.toUpperCase() === "SPECIAL-ATTACK"
                        ? "S-ATTACK"
                        : stat.stat.name.toUpperCase() === "SPECIAL-DEFENSE"
                        ? "S-DEFENSE"
                        : stat.stat.name.toUpperCase()}
                    </p>
                  </div>
                  <div className="col-3 col-md-12 text-center">
                    <p className="text-secondary fw-bold my-2">
                      {stat.base_stat}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
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
