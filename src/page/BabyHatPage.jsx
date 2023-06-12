import './page.css';

import { Link } from 'react-router-dom';

export const BabyHatPage = (cards) => {
  return (
    <div className="favoritepage__conteiner">
      <h1 className="favorites__title">Шапки детские</h1>

      <div className="hatpage__item">Шапка детская</div>
      <Link to="/">
        <button className="button__main">На главную</button>
      </Link>
    </div>
  );
};
