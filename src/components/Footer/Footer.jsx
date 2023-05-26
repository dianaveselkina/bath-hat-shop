import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { SiTelegram } from 'react-icons/si';
import { SlSocialVkontakte } from 'react-icons/sl';
import { ReactComponent } from '../img/logo.svg';
import { Link } from 'react-router-dom';

import './footer.css';
export const Footer = () => {
  return (
    <div className="footer__conteiner">
      <div className="logo">
        <Link to="/">
          <ReactComponent className="footer__logotip" />
        </Link>
        <p>© «Интернет-магазин Bath hat»</p>
      </div>
      <div className="footer__nav">
        <ul className="nav__link">
          <li>
            <Link to="/paymentshippingpage" className="footer__link">
              Оплата и доставка
            </Link>
          </li>
          <li>
            <Link to="/productcarepage" className="footer__link">
              Уход за изделием
            </Link>
          </li>
          <li>
            <Link to="/productreturnpage" className="footer__link">
              Обмен и возврат
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer__info">
        <ul className="info__list">
          <li>
            <Link to="*" className="footer__link">
              Отзывы
            </Link>
          </li>
          <li>
            <Link to="*" className="footer__link">
              Интересные факты
            </Link>
          </li>
          <li>
            <Link to="*" className="footer__link">
              Довольные клиенты
            </Link>
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
