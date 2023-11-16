import Header from '../components/layout/Header'
import Issues  from '../components/layout/Issues'
import Service  from '../components/layout/Service'
import Events  from '../components/layout/Events'

export default function Home () {
  return (
    <>
    <Header/>
    <div className='container'>
      <Issues
        title={["政策議題", "Policy Issues"]}
      />
      <Events
        title={["最新活動", "Latest Events"]}
      />
      <Service
        title={["服務信箱", "Service Mail"]}
        subtitle="您的聲音，我們的行動！"
        description="親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！"
      />
    </div>
    </>
  )
}
