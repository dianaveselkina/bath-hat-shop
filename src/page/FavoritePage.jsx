import React, { useContext } from 'react';
import './favoritepage.css';
import { CardList } from '../components/CardList/CardList';
import { CardsContext } from '../context/cardContext';
import { Link } from 'react-router-dom';

export const FavoritePage = () => {
  const { favorites } = useContext(CardsContext);
  return (
    <div className="favoritepage__conteiner">
      <h1 className="favorites__titlle">Избранное</h1>
      <CardList cards={favorites} />
      <Link to="/">
        <button className="button__main">На главную</button>
      </Link>
    </div>
  );
};
