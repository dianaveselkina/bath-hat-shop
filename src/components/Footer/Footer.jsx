import { BsWhatsapp } from 'react-icons/bs';
import { SiTelegram } from 'react-icons/si';
import { SlSocialVkontakte } from 'react-icons/sl';
import { ReactComponent as LogoSvg } from '../Logo/logo.svg';

import './footer.css';
export const Footer = () => {
  return (
    <div className="footer__conteiner">
      <div className="logo">
        <LogoSvg className="logo" />
        <p>© «Интернет-магазин Bath hat»</p>
      </div>
      <div className="footer__nav">
        <ul className="footer__list">
          <li>
            <a href="/" className="footer__link">
              Оплата и доставка
            </a>
          </li>
          <li>
            <a href="/" className="footer__link">
              Уход за изделием
            </a>
          </li>
          <li>
            <a href="/" className="footer__link">
              Обмен и возврат
            </a>
          </li>
        </ul>
      </div>
      <div className="social">
        <p className="telephone">8 920 667 90 01</p>
        <BsWhatsapp className="footer__social" />
        <SiTelegram className="footer__social" />
        <SlSocialVkontakte className="footer__social" />
      </div>
    </div>
  );
};
