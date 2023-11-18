import PropTypes from 'prop-types';
import Icon from './Icon'

function Donation({item}) {
  const { title, price, count, icon } = item

  const toThousandSeparator = (value) => {
    if (value == null) return '0'
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <>
      <div className="donation">
        <input type="radio" id={title} name="donation"/>
        <label htmlFor={title} className="donation-label">
          <div className="donation-content">
            <p className="donation-title">
              {title}
              <span className="donation-divider"></span>
                {isNaN(price)
                  ? <span>{price}</span>
                  : <span className="donation-price">{toThousandSeparator(price)} </span>
                }
            </p>
            <span className="donation-sponsor">
                已有 {toThousandSeparator(count)} 人贊助
            </span>
          </div>
          <div className="donation-img">
            <Icon content={icon} size={128}/>
          </div>
        </label>

      </div>
    </>
  )
}


Donation.propTypes = {
  item: PropTypes.object,
};

export default Donation;