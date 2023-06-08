import React, { useContext } from 'react';
import { BsCart4 } from 'react-icons/bs';
import { BsPersonBoundingBox } from 'react-icons/bs';
import { BsArrowRepeat } from 'react-icons/bs';

import './header.css';
import { Search } from '../Search/Search';
import { ReactComponent } from '../img/logo.svg';
import { ReactComponent as Like } from '../img/like.svg';
import { useLocation } from 'react-router-dom';
import { CardsContext } from '../../context/cardContext';
import { Link } from 'react-router-dom';

export const Header = ({ setSearch, response }) => {
  const setSearchQuery = (path) => {
    setSearch(path);
  };

  const location = useLocation();
  const { favorites, setModalActive } = useContext(CardsContext);
  return (
    <div className="header">
      <div className="header__conteiner">
        <Link to="/">
          <ReactComponent className="header__logotip" />
        </Link>
        <p className="header__title">
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

          <BsCart4 className="header__icons" />
          <div className="header__user">
            {!!response.data && (
              <>
                <div>
                  <img className="img__avatar" src={response?.data.avatar} />
                </div>
                <div className="header__user__info">
                  <div>{response?.data.name}</div>
                  <div>{response?.data.email}</div>
                </div>
              </>
            )}
          </div>
          <Link to="/registrationform">
            <BsPersonBoundingBox
              onClick={() => setModalActive(true)}
              className="header__profile"
            />
          </Link>
          <Link to="userprofile">
            <BsArrowRepeat className="header__profile" />
          </Link>
        </div>
      </div>
    </div>
  );
};
