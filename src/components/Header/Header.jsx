import React, { useContext } from 'react';
import { BsCart4 } from 'react-icons/bs';

import './header.css';
import { Search } from '../Search/Search';
import { ReactComponent } from '../img/logo.svg';
import { ReactComponent as Like } from '../img/like.svg';
import { useLocation } from 'react-router-dom';
import { CardsContext } from '../../context/cardContext';
import { Link } from 'react-router-dom';

export const Header = (props) => {
  const setSearchQuery = (path) => {
    props.setSearch(path);
  };
  const location = useLocation();
  const { favorites } = useContext(CardsContext);
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
          <Link className="header__fav" to={'/favorites'}>
            <Like className="header__like" />
            {!!favorites.length && (
              <span className="header__num">{favorites.length}</span>
            )}
          </Link>
          <div className="basket">
            <BsCart4 className="header__icons" />
          </div>
        </div>
      </div>
    </div>
  );
};
