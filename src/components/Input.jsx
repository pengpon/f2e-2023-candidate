import PropTypes from 'prop-types';

function Input(props) {
  const {name, type, className, placeholder} = props;
  return(
    <>
    <div className="form-field">
      <label htmlFor={name} className="label">{name}</label>
      <input id={name} type={type} className={`input ${className}`} placeholder={placeholder}/>
    </div>
    </>
  )
}

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;