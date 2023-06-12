import React from 'react';
import { CardList } from '../components/CardList/CardList';
import './page.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  CHEAPER,
  EXPENSIVE,
  NEW,
  POPULAR,
  RATING,
  SALE,
} from '../constans/constans';
import { sortedProducts } from '../components/Store/Slices/productsSlice';
export const CatalogPage = () => {
  const { products, search } = useSelector((s) => s.products);
  const dispatch = useDispatch();

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
    { id: POPULAR },
    { id: NEW },
    { id: CHEAPER },
    { id: EXPENSIVE },
    { id: RATING },
    { id: SALE },
  ];
  return (
    <>
      <div className="catalogpage__sort">
        {sortedItems.map((e) => (
          <span
            className="catalogpage__item"
            key={e.id}
            onClick={() => dispatch(sortedProducts(e.id))}
          >
            {e.id}
          </span>
        ))}
      </div>
      {search && (
        <p className="catalogpage__search">
          {' '}
          По запросу <b>{search}</b>{' '}
          {products.length === 1 ? 'найден' : 'найдено'} {products.length}
          {getHats(products.length)}
        </p>
      )}
      <CardList cards={products} />
    </>
  );
};
