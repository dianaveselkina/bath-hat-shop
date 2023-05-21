import React from 'react';
import { Link } from 'react-router-dom';
import './page.css';

export const CatalogHatsPage = () => {
  return (
    <div className="hatpage__conteiner">
      <div className="hatpage__item">Шапки мужские</div>
      <div className="hatpage__item">Шапки детские</div>
      <div className="hatpage__item">Шапки женские</div>
      <div className="hatpage__item">Sale</div>
      <Link to="/">
        <button className="button__main">На главную</button>
      </Link>
    </div>
  );
};
