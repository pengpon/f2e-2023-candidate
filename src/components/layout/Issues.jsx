import PropTypes from 'prop-types';
import Tabs from '../Tabs'

function Issues({title, subtitle}) {
  const list = [
    {
      id: "1",
      title: "寵物醫療保障方案",
      desc: "為毛孩子謀福利！推動寵物醫療保障方案",
      items: [
        {
          title: "設立寵物醫療基金",
          desc: "每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用。",
          icon: "piggy-bank"
        },
        {
          title: "提供醫療補助",
          desc: "每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力。",
          icon: "first-aid-kit"
        },
        {
          title: "合作動物醫院",
          desc: "目前已有和超過 200 家動物醫院進行初步的合作討論。",
          icon: "handshake"
        }
      ]
    },
    {
      id: "2",
      title: "寵物休閒與娛樂場所",
      desc: "打造休閒天堂！推廣寵物休閒與娛樂場所",
      items: [
        {
          title: "建立寵物公園",
          desc: "每年撥款新台幣 5 億元，用於在各大都市建立專屬的寵物公園。根據初步規劃，預計在第一年內，將在全國範圍內建立至少 10 座寵物公園。",
          icon: "park"
        },
        {
          title: "推廣寵物友善商家",
          desc: "鼓勵商家提供寵物友善的環境，並為參與的商家提供稅收優惠。預計在政策實施後的首年，將有超過 500 家商家加入此計畫。",
          icon: "store-front"
        },
        {
          title: "舉辦寵物活動和工作坊",
          desc: "與各大寵物社團和組織合作，每年舉辦至少 5 場大型的寵物活動，包括寵物才藝比賽、飼養知識工作坊等。",
          icon: "paw-print"
        }
      ]
    },
    {
      id: "3",
      title: "推廣寵物飼養教育",
      desc: "推廣寵物飼養教育，讓愛更加專業",
      items: [
        {
          title: "建立寵物飼養教育中心",
          desc: "每年撥款新台幣 3 億元，用於在全國各地建立專業的寵物飼養教育中心。預計在第一年內，在全國至少 5 大城市設立教育中心。",
          icon: "buildings"
        },
        {
          title: "推廣寵物飼養課程",
          desc: "與學校、社區組織和寵物社團合作，推出一系列免費的寵物飼養課程。預計每年將有超過 10,000 名市民受益。",
          icon: "bowl-food"
        },
        {
          title: "製作教育資料",
          desc: "出版寵物飼養手冊、影片和線上課程，讓所有有意飼養寵物的家庭都能輕鬆取得正確的知識",
          icon: "video"
        }
      ]
    }
  ];

  return (
    <>
    <section className="section">
      <h2 className="title">{title}</h2>
      <h3 className="subtitle">{subtitle}</h3>
      <Tabs list={list}/>
    </section>
    </>
  )
}

Issues.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Issues;