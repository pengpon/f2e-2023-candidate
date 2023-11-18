import Button from '../Button'
import Icon from '../Icon'
import KvImage from '../../assets/kv.png'

export default function Kv() {
  return(
    <>
      <div className='section kv'>
        <div className="kv-media">
          <img src={KvImage} alt="key-vision" className="kv-img" />
          <Button type="small" className="kv-btn">
            <span>候選人簡介</span>
            <Icon content="arrow-right"/>
          </Button>
        </div>
        <div className="kv-slogan">
          <div className="slogan-title">
            <span>喵喵權益</span>
            <span>我帶頭</span>
          </div>
          <span className='slogan-text'>
            <Icon content="vote"/>
            立委請支持
            <span className="slogan-number mx-2">1</span>
            黑新星
            <Icon content="vote"/>
          </span>
        </div>
      </div>
    </>
  )
}