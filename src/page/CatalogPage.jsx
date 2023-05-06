import React from 'react';
import { CardList } from '../components/CardList/CardList';
import './catalogpage.css';
export const CatalogPage = ({ cards, search, onSort }) => {
  const getHats = (num) => {
    const thing = num % 10;
    if (!thing || !!num) {
      return ' товаров';
    }
    if (thing === 1) {
      return ' товар';
    }
    if (thing > 1 && thing < 5) {
      return ' товара';
    }
  };
  const sortedItems = [
    { id: 'popular', title: 'Популярные' },
    { id: 'new' },
    { id: 'cheaper' },
    { id: 'rating' },
    { id: 'expensive' },
    { id: 'sale' },
  ];
  return (
    <>
      {search && (
        <p className="search">
          {' '}
          По запросу <b>{search}</b> {cards.length === 1 ? 'найден' : 'найдено'}{' '}
          {cards.length}
          {getHats(cards.length)}
        </p>
      )}
      <div className="catalogpage__sort">
        {sortedItems.map((e) => (
          <span
            className="catalogpage__item"
            key={e.id}
            onClick={() => onSort(e.id)}
          >
            {e.id}
          </span>
        ))}
      </div>
      <CardList cards={cards} />
    </>
  );
};
