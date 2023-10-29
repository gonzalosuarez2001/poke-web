import PropTypes from "prop-types";
import "../../css/PokeCardTypes.css";

export default function PokeCardTypes(props) {
  return (
    <p className={`${props.type} col-5 text-white text-center fw-bold rounded mx-1 my-0 p-1`}>
      {props.type.toUpperCase()}
    </p>
  );
}

PokeCardTypes.propTypes = {
  type: PropTypes.string.isRequired,
};
