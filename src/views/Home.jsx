import Header from '../components/layout/Header'
import Kv from '../components/layout/Kv'
import Issues  from '../components/layout/Issues'
import Service  from '../components/layout/Service'
import Donations  from '../components/layout/Donations'
import Events  from '../components/layout/Events'
import Claims from '../components/layout/Claims'
import Footer from '../components/layout/Footer'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home () {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, [])

  return (
    <>
      <Header/>
      <Kv/>
      <div className='container'>
        <Claims
          title={["候選主張", "Candidate Claims"]}
        />
        <Events
          title={["最新活動", "Latest Events"]}
        />
        <Issues
          title={["政策議題", "Policy Issues"]}
        />
        <Donations
          title={["小額捐款", "Small Donations"]}
          subtitle="您的每筆捐款，是每隻毛孩未來的大大動力！"
        />
        <Service
          title={["服務信箱", "Service Mail"]}
          subtitle="您的聲音，我們的行動！"
          description="親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！"
        />
      </div>
      <Footer />
    </>
  )
}
