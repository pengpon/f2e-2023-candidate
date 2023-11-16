import PropTypes from 'prop-types';

function Textarea(props) {
  const {name, className, placeholder, rows} = props;
  return(
    <>
    <div className="form-field">
      <label htmlFor={name} className="label">{name}</label>
      <textarea id={name} className={`input ${className}`} placeholder={placeholder} rows={rows}/>
    </div>
    </>
  )
}

Textarea.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
};

export default Textarea;