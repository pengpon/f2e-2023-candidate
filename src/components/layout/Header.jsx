import { useState, useEffect, useRef } from 'react'
import Button from '../Button'
import TextLink from '../TextLink'
import Icon from '../Icon'
import Logo from '../../assets/logo-dark.svg'

export default function Header() {
  const checkboxRef = useRef(null);
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const query = `(min-width: 992px)`;
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    if (media.matches) {
      checkboxRef.current.checked = false;
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [matches]);

  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className="header__logo">黑新星</h1>
          <input type="checkbox" id="navbar-check" ref={checkboxRef}/>
          <label htmlFor="navbar-check" className="overlay"></label>
          <span className="navbar-btn">
            <label htmlFor="navbar-check">
              <Icon content="list"/>
            </label>
          </span>
          <div className="menu mobile">
            <img src={Logo} alt="logo" className="menu-logo" />
            <ul className="main-menu">
              <li className="menu-item">
                <Button type="small">
                  <Icon content="hand-coins"/>
                  <span>小額捐款</span>
                </Button>
              </li>
              <li className="menu-item">
                <TextLink href="#">
                  候選主張
                </TextLink>
              </li>
              <li className="menu-item">
                <TextLink href="#">
                  最新活動
                </TextLink>
              </li>
              <li className="menu-item">
                <TextLink href="#">
                  政策議題
                </TextLink>
              </li>
              <li className="menu-item">
                <TextLink href="#">
                  服務信箱
                </TextLink>
              </li>
            </ul>
            <ul className="sub-menu">
              <li className="menu-item">
                <TextLink href="#">
                  <Icon content="social-link-facebook"/>
                  <span className="link-text">Facebook</span>
                </TextLink>
              </li>
              <li className="menu-item">
                <TextLink href="#">
                  <Icon content="social-link-instagram"/>
                  <span className="link-text">Instagram</span>
                </TextLink>
              </li>
              <li className="menu-item">
                <TextLink href="#">
                  <Icon content="social-link-youtube"/>
                  <span className="link-text">YouTube</span>
                </TextLink>
              </li>
            </ul>
          </div>
          <ul className="main-menu desktop">
            <li className="menu-item">
              <Button type="small">
                <Icon content="hand-coins"/>
                <span>小額捐款</span>
              </Button>
            </li>
            <li className="menu-item">
              <TextLink href="#">
                候選主張
              </TextLink>
            </li>
            <li className="menu-item">
              <TextLink href="#">
              最新活動
              </TextLink>
            </li>
            <li className="menu-item">
              <TextLink href="#">
              政策議題
              </TextLink>
            </li>
            <li className="menu-item">
              <TextLink href="#">
              服務信箱
              </TextLink>
            </li>
          </ul>
          <ul className="sub-menu desktop">
            <li className="menu-item">
              <TextLink href="#">
                <Icon content="social-link-facebook"/>
                <span className="link-text">Facebook</span>
              </TextLink>
            </li>
            <li className="menu-item">
              <TextLink href="#">
                <Icon content="social-link-instagram"/>
                <span className="link-text">Instagram</span>
              </TextLink>
            </li>
            <li className="menu-item">
              <TextLink href="#">
                <Icon content="social-link-youtube"/>
                <span className="link-text">YouTube</span>
              </TextLink>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}