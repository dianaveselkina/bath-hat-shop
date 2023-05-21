import React from 'react';
import { CardList } from '../components/CardList/CardList';
import './page.css';
export const CatalogPage = ({ cards, search, onSort }) => {
  const getHats = (num) => {
    const thing = num % 10;
    if (!thing || !num) {
      return ' товаров';
    }
    if (thing === 1) {
      return ' товар';
    }
    if (thing > 1 && thing < 5) {
      return ' товара';
    }
    if (thing > 5) {
      return ' товаров';
    }
  };

  const sortedItems = [
    { id: 'new' },
    { id: 'cheaper' },
    { id: 'rating' },
    { id: 'expensive' },
    { id: 'sale' },
  ];
  return (
    <>
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
      {search && (
        <p className="catalogpage__search">
          {' '}
          По запросу <b>{search}</b> {cards.length === 1 ? 'найден' : 'найдено'}{' '}
          {cards.length}
          {getHats(cards.length)}
        </p>
      )}
      <CardList cards={cards} />
    </>
  );
};
