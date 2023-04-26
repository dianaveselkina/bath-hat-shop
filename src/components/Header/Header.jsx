import { BsCart4 } from 'react-icons/bs';
import React from 'react';
import './header.css';
import { Search } from '../Search/Search';
import { ReactComponent } from '../img/logo.svg';

export const Header = (props) => {
  return (
    <div className="header">
      <div className="header__conteiner">
        <ReactComponent className="header__logotip" />
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
    </div>
  );
};
