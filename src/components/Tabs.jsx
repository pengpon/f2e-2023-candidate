import PropTypes from 'prop-types';
import Icon from "./Icon"
function Tabs({list}) {
  let isChecked = 1;

  const labels = list.map(item => (
      <label key={item.title} className="tab" htmlFor={`tab${item.id}`}>{item.title}
        <input type="radio" name="tab" id={`tab${item.id}`} defaultChecked={item.id == isChecked && 'checked' }/>
      </label>
  ));

  const views = list.map(view => (
      <div id={`tabs-view-${view.id}`} className="tabs-view" key={view.id}>
        <p className="view-desc">{view.desc}</p>
        <ul>
          {view.items.map((item,i) => (
            <li className="item" key={i}>
              <div className="item-img">
                <Icon content={item.icon} size={128} />
              </div>
              <p className="item-title">
                {item.title}
              </p>
              <p className="item-desc">
                {item.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
  ))

  return(
    <div className="tabs">
      {labels}
      <div className="tabs-views">
        {views}
      </div>
    </div>
  )

}

Tabs.propTypes = {
  list: PropTypes.array
};

export default Tabs