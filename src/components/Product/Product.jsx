import React from 'react';
import { BsCart4 } from 'react-icons/bs';
import './product.css';
import { Link } from 'react-router-dom';
export const Product = ({ product }) => {
  return (
    <div className="productpage__conteiner">
      <Link to="/">
        <button className="button__main">На главную</button>
      </Link>
      <div className="productpage__img">
        <titlle className="productpage__titlle">{product.name}</titlle>
        <img src={product.pictures} alt="шапка" className="product__img" />
        <div className="productpage__description">
          <p className="postpage__titlle">Описание</p>
          <p className="postpage__description">{product.description}</p>
          <titlle className="postpage__titlle">Отзывы</titlle>
          <p>Оставьте свой отзыв</p>
        </div>
      </div>
      <div className="productpage__infa">
        <p className="productpage__price">{product.price}&nbsp;p</p>
        <button className="productpage__button">
          {' '}
          <BsCart4 className="card__icons" />
        </button>
        <div className="productpage__delivery">
          <p>Доставка по всему миру!</p>
          <p>Доставка курьером от 500р</p>
          <p>Доставка до пункта выдачи от 300р</p>
        </div>
        <div className="productpage__quality">
          <p>
            Если Вам не понравилось качество нашей продукции, мы вернем деньги,
            либо сделаем все возможное, чтобы удовлетворить ваши нужды.
          </p>
        </div>
      </div>
    </div>
  );
};
