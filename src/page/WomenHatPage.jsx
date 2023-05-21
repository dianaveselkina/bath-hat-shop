import React from 'react';
import { Link } from 'react-router-dom';
import './page.css';

export const WomenHatPage = () => {
  return (
    <div className="hatpage__conteiner">
      <div className="hatpage__item">Шапка женская</div>
      <div className="hatpage__item">Шапка женская</div>
      <div className="hatpage__item">Шапка женская</div>
      <div className="hatpage__item">Шапка женская</div>
      <Link to="/">
        <button className="button__main">На главную</button>
      </Link>
    </div>
  );
};
