import PropTypes from 'prop-types';
import { ReactSVG } from "react-svg";

function Icon({content, size}) {
  if (!size) {
    size = 32;
  }
  return (
    <>
      <ReactSVG
        className="icon"
        style={{width: `${size}px`}}
        src={`./icons/${content}.svg`}
      />
    </>
  )
}

Icon.propTypes = {
  content: PropTypes.string,
  size: PropTypes.number,
};

export default Icon;
