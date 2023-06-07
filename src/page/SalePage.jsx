import React from 'react';
import { Link } from 'react-router-dom';
import './page.css';

export const SalePage = () => {
  return (
    <div className="favoritepage__conteiner">
      <h1 className="favorites__title">Sale</h1>
      <div className="hatpage__item">Sale</div>
      <Link to="/">
        <button className="button__main">На главную</button>
      </Link>
    </div>
  );
};
