import PropTypes from 'prop-types';
import { ReactSVG } from "react-svg";

function Icon({content}) {
  return (
    <>
      <span className="icon">
        <ReactSVG src={`./icons/${content}.svg`} />
      </span>
    </>
  )
}

Icon.propTypes = {
  content: PropTypes.string,
};

export default Icon;
