import React from 'react';
import './page.css';
import { Link } from 'react-router-dom';
import { CardList } from '../components/CardList/CardList';
import { useSelector } from 'react-redux';

export const WomenHatPage = () => {
  const { products } = useSelector((s) => s.products);
  return (
    <div className="favoritepage__conteiner">
      <h1 className="favorites__title">Шапки женские</h1>
      <CardList cards={products?.filter((e) => e.tags == 'женская')} />
      <Link to="/">
        <button className="button__main">На главную</button>
      </Link>
    </div>
  );
};
