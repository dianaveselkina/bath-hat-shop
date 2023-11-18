import './navlist.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
export const NavList = () => {
  return (
    <div className="navlist">
      <div className="navlist__image">
        <div>
          <p className="navlist__animation">
            Самые лучшие шапки <br /> для бани <br /> из натуральной шерсти{' '}
          </p>
        </div>
      </div>
      <div className="navlist__nav">
        <ul className="nav__list">
          <NavLink to="/">Каталог</NavLink>
          <NavLink to="/menhatpage">Мужские шапки</NavLink>
          <NavLink to="/babyhatpage">Детские шапки</NavLink>
          <NavLink to="/womenhatpage">Женские шапки</NavLink>
          <NavLink to="/salepage">Sale</NavLink>
        </ul>
      </div>
    </div>
  );
};
