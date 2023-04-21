import React from 'react';
import './header.css';
import { ReactComponent as LogoSvg } from '../Logo/logo.svg';
import { Search } from '../Search/Search';

export const Header = (props) => {
  const setSearchQuery = (path) => {
    props.setSearch(path);
  };
  return (
    <div>
      <div className="header__conteiner">
        <LogoSvg className="logo" />
        <div className="titlle">Удивительные шапки</div>
        <Search setSearch={setSearchQuery} />
        <div className="basket"></div>
      </div>
      <div className="header__image">Второй</div>
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
export default Header;
