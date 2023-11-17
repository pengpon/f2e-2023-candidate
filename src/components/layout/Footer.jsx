import TextLink from '../TextLink'
import Logo from '../../assets/logo-light.png'
import Icon from '../Icon'

export default function Footer() {
  return(
    <>
      <footer className="footer">
        <div className="footer-logo">
          <img src={Logo} alt="logo" />
        </div>
        <ul className="footer-social">
          <li className="menu-item">
            <TextLink href="#">
              <Icon content="social-link-facebook" size={32}/>
            </TextLink>
          </li>
          <li className="menu-item">
            <TextLink href="#">
              <Icon content="social-link-instagram" size={32}/>
            </TextLink>
          </li>
          <li className="menu-item">
            <TextLink href="#">
              <Icon content="social-link-youtube" size={32}/>
            </TextLink>
          </li>
        </ul>
        <div className="footer-content">
          <div className="footer-link">
            <div className="footer-subtitle">快速連結</div>
            <ul>
              <li className="link-item">
                <TextLink href="#">首頁</TextLink>
              </li>
              <li className="link-item">
                <TextLink href="#">最新活動</TextLink>
              </li>
              <li className="link-item">
                <TextLink href="#">政策議題</TextLink>
              </li>
              <li className="link-item">
                <TextLink href="#">小額捐款</TextLink>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <div className="footer-subtitle">與我們聯繫</div>
            <ul>
              <li className="contact-item">
                <TextLink href="https://maps.app.goo.gl/KuZHsE9crpmycmGW9">
                  <Icon content="map-pin" size={16} />新星區閃耀大道88號  喵喵大樓3樓
                </TextLink>
              </li>
              <li className="contact-item">
                <TextLink href="tel:">
                  <Icon content="phone" size={16} />(02) 888-5678
                </TextLink>
              </li>
              <li className="contact-item">
                <TextLink href="mailto:supernova.black@gmail.com">
                  <Icon content="envelope" size={16} />supernova.black@gmail.com
                </TextLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright">
          <p>© 2023 黑新星 Supernova Black 版權所有。</p>
          <p>設計師：PinChen Wu | 前端：Shan</p>
        </div>
      </footer>
    </>
  )
}