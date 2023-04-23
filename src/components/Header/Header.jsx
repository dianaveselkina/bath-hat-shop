import { BsCart4 } from 'react-icons/bs';
import React from 'react';
import './header.css';
import { Search } from '../Search/Search';
import { ReactComponent as LogoSvg } from '../Logo/logo.svg';

export const Header = (props) => {
  return (
    <div className="header">
      <div className="header__conteiner">
        <LogoSvg className="logotip" />
        <p className="titlle">
          Удивительные
          <br />
          шапки
        </p>
        <Search setSearch={() => {}} />
        <div className="basket">
          <BsCart4 className="header__icons" />
        </div>
      </div>
      <div className="header__image"></div>
      <div className="header__nav">
        <ul className="nav__list">
          <li>Каталог</li>
          <li>Женские шапки</li>
          <li>Мужские шапки</li>
          <li>Детские шапки</li>
          <li>Новинки</li>
          <li>Sale</li>
        </ul>
      </div>
    </div>
  );
};
