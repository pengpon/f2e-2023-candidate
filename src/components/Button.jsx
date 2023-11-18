
import PropTypes from 'prop-types';

function Button({type, children}) {
  return (
    <>
      <button className={`btn is-${type}`}>
        {children}
      </button>
    </>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string
};

export default Button;