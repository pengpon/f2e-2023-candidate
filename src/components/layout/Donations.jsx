import PropTypes from 'prop-types';
import Donation from '../Donation'

function Donations({title, subtitle}) {
  // FIXME: 抽出來全站共用
  const toThousandSeparator = (value) => {
    if (value == null) return '0'
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const total = 987655873;
  const events = [
    {
      id: 1,
      title: "喵衛星",
      price: 600,
      count: 2000,
      icon: "moon-stars"
    },
    {
      id: 2,
      title: "喵行星",
      price: 6000,
      count: 2000,
      icon: "planet"
    },
    {
      id: 3,
      title: "喵恆星",
      price: 60000,
      count: 2000,
      icon: "sun"
    },
    {
      id: 4,
      title: "喵彗星",
      price: "自訂贊助金額",
      count: 2000,
      icon: "shooting-star"
    }
  ];

  const donationItems = events.map(donation => (
    <Donation key={donation.id} item={donation} />
  ))


  return (
    <>
    <section className="section donations">
      <div className="donations-context">
        <h2 className="title">{title[0]}
          <span className="title-en">{title[1]}
          </span>
        </h2>
        <h3 className="subtitle">{subtitle}</h3>

        <span className="donations-total">
          目前贊助總金額
          <span className="donations-total-count">{toThousandSeparator(total)}</span>
        </span>
      </div>
      <div className='donations-donation'>
        {donationItems}
      </div>
    </section>
    </>
  )
}

Donations.propTypes = {
  title: PropTypes.array,
  subtitle: PropTypes.string
};

export default Donations;