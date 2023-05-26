import React, { useContext } from 'react';
import { BsCart4 } from 'react-icons/bs';
import { BsPersonBoundingBox } from 'react-icons/bs';

import './header.css';
import { Search } from '../Search/Search';
import { ReactComponent } from '../img/logo.svg';
import { ReactComponent as Like } from '../img/like.svg';
import { useLocation } from 'react-router-dom';
import { CardsContext } from '../../context/cardContext';
import { Link } from 'react-router-dom';

export const Header = ({ setSearch, response }) => {
  console.log(response);
  const setSearchQuery = (path) => {
    setSearch(path);
  };
  console.log(response?.data);
  const location = useLocation();
  const { favorites, setModalActive } = useContext(CardsContext);
  return (
    <div className="header">
      <div className="header__conteiner">
        <Link to="/">
          <ReactComponent className="header__logotip" />
        </Link>
        <p className="title">
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

            {!!response.data && (
              <>
                <div>{response?.data.name}</div>
                <div>{response?.data.email}</div>
              </>
            )}

            <Link to="/registrationform">
              <BsPersonBoundingBox
                onClick={() => setModalActive(true)}
                className="header__profile"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
