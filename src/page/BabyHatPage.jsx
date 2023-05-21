import React from 'react';
import { Link } from 'react-router-dom';
import './page.css';

export const BabyHatPage = () => {
  return (
    <div className="hatpage__conteiner">
      <div className="hatpage__item">Шапка детская</div>
      <div className="hatpage__item">Шапка детская</div>
      <div className="hatpage__item">Шапка детская</div>
      <div className="hatpage__item">Шапка детская</div>
      <div className="hatpage__item">Шапка детская</div>
      <div className="hatpage__item">Шапка детская</div>
      <Link to="/">
        <button className="button__main">На главную</button>
      </Link>
    </div>
  );
};
