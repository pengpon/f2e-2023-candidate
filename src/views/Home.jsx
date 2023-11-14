import Header from '../components/layout/Header'
import Issues  from '../components/layout/Issues'

export default function Home () {
  return (
    <>
    <Header/>
    <div className='container'>
      <Issues title="政策議題" subtitle="Policy Issues"/>
    </div>
    </>
  )
}
