import { BsCart4 } from 'react-icons/bs';
import React from 'react';
import './header.css';
import { Search } from '../Search/Search';
import { ReactComponent } from '../img/logo.svg';
import { ReactComponent as Like } from '../img/like.svg';
import { useLocation } from 'react-router-dom';

export const Header = (props) => {
  const setSearchQuery = (path) => {
    props.setSearch(path);
  };
  const location = useLocation();
  return (
    <div className="header">
      <div className="header__conteiner">
        <ReactComponent className="header__logotip" />
        <p className="titlle">
          Удивительные
          <br />
          шапки
        </p>
        {location.pathname === '/' && <Search setSearch={setSearchQuery} />}
        <div className="header__pin">
          <div className="header__favorite">
            {' '}
            <Like />
          </div>
          <div className="basket">
            <BsCart4 className="header__icons" />
          </div>
        </div>
      </div>
    </div>
  );
};
