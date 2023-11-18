import PropTypes from 'prop-types';
import Card from '../Card'

function Events({title}) {
  const events = [
    {
      id: 1,
      title: "參與台北寵物論壇，爭取貓咪友善環境",
      desc: "炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。",
      date: "12.26.2023",
      btnText: "閱讀更多",
      btnIcon: "arrow-right",
      imgPath: "./event-conf.png"
    },
    {
      id: 2,
      title: "掃街模式開啟！帶著你的貓耳，和我一起走！",
      desc: "街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。",
      date: "12.24.2023",
      btnText: "閱讀更多",
      btnIcon: "arrow-right",
      imgPath: "./event-street.png"
    },
    {
      id: 3,
      title: "收容所模特兒大比拼！",
      desc: "今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！",
      date: "12.20.2023",
      btnText: "閱讀更多",
      btnIcon: "arrow-right",
      imgPath: "./event-model.png"
    }
  ];

  const cardItems = events.map(event => (
    <Card key={event.id} item={event} />
  ))


  return (
    <>
    <section className="section events" data-aos="zoom-in" id="events">
      <div className="events-title">
        <h2 className="title">{title[0]}
          <span className="title-en">{title[1]}
          </span>
        </h2>
      </div>
      <div className='events-cards'>
        {cardItems}
      </div>
    </section>
    </>
  )
}

Events.propTypes = {
  title: PropTypes.array,
};

export default Events;