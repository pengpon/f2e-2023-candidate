import PropTypes from 'prop-types';
import Button from './Button'
import Icon from './Icon'

function Card({item}) {
  const { imgPath, title, desc, date, btnText, btnIcon } = item

  return(
    <>
    <div className="card">
      <div className="card-image mb-3">
        <img src={imgPath} alt="card-image" />
      </div>
      <div className="card-content">
        <div className="card-body mb-2">
          <p className="card-title mb-2">{title}</p>
          <p className="card-description">{desc}</p>
        </div>
        <div className="card-footer">
          <span className="card-date">{date}</span>
          <Button type="small">
            <span>{btnText}</span>
            <Icon content={btnIcon} size={24}/>
          </Button>
        </div>
      </div>
    </div>
    </>
  )
}

Card.propTypes = {
  item: PropTypes.object,
};

export default Card;