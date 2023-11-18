import PropTypes from 'prop-types';

function Claims({title}) {
  const claims = [
    {
      id: 1,
      text: "我黑新星堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。",
    },
    {
      id: 2,
      text: "因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。"
    }
  ];

  const contexts = claims.map(item => (
    <p key={item.id} className="context">{item.text}</p>
  ))

  return (
    <>
    <section className="section claims" data-aos="zoom-in" id="claims">
      <h2 className="title">{title[0]}
        <span className="title-en">{title[1]}
        </span>
      </h2>
      <div className="context-wrapper">
        {contexts}
      </div>
    </section>
    </>
  )
}

Claims.propTypes = {
  title: PropTypes.array,
};

export default Claims;