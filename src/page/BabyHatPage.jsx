import React, { useContext } from 'react';
import './page.css';
import { CardList } from '../components/CardList/CardList';
import { CardsContext } from '../context/cardContext';
import { Link } from 'react-router-dom';

export const BabyHatPage = (cards) => {
  const { favorites } = useContext(CardsContext);
  return (
    <div className="favoritepage__conteiner">
      <h1 className="favorites__title">Шапки детские</h1>
      <CardList cards={favorites} />
      <Link to="/">
        <button className="button__main">На главную</button>
      </Link>
    </div>
  );
};
