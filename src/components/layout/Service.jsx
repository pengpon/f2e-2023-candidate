import PropTypes from 'prop-types';
import Forms from './Forms'
import ServiceImage from '../../assets/service.png'

function Service({title, subtitle, description}) {

  return (
    <>
    <section className="section service">
      <div className="service-context mb-4">
        <h2 className="title">{title[0]}
          <span className="title-en">{title[1]}
          </span>
        </h2>
        <h3 className="subtitle">{subtitle}</h3>
        <p className="description">{description}</p>
        <img src={ServiceImage} alt="service" className='service-img' />
      </div>
      <Forms className="service-form"/>
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