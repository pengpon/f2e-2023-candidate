import PropTypes from 'prop-types';
import Forms from './Forms'

function Service({title, subtitle, description}) {

  return (
    <>
    <section className="section">
      <h2 className="title">{title[0]}
        <span className="title-en">{title[1]}
        </span>
      </h2>
      <h3 className="subtitle">{subtitle}</h3>
      <p className="description">{description}</p>
      <Forms/>
    </section>
    </>
  )
}

Service.propTypes = {
  title: PropTypes.array,
  subtitle: PropTypes.string,
  description: PropTypes.string,
};

export default Service;