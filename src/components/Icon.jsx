import PropTypes from 'prop-types';
import { ReactSVG } from "react-svg";

function Icon({content}) {
  return (
    <>
      <ReactSVG className="icon" src={`./icons/${content}.svg`} />
    </>
  )
}

Icon.propTypes = {
  content: PropTypes.string,
};

export default Icon;
