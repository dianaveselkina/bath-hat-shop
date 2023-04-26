import { BsWhatsapp } from 'react-icons/bs';
import { SiTelegram } from 'react-icons/si';
import { SlSocialVkontakte } from 'react-icons/sl';
import { ReactComponent } from '../img/logo.svg';

import './footer.css';
export const Footer = () => {
  return (
    <div className="footer__conteiner">
      <div className="logo">
        <ReactComponent className="footer__logotip" />
        <p>© «Интернет-магазин Bath hat»</p>
      </div>
      <div className="footer__nav">
        <ul className="nav__link">
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
      <div className="footer__info">
        <ul className="info__list">
          <li>
            <a href="/" className="footer__link">
              Отзывы
            </a>
          </li>
          <li>
            <a href="/" className="footer__link">
              Интересные факты
            </a>
          </li>
          <li>
            <a href="/" className="footer__link">
              Довольные клиенты
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
