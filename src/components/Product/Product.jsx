import React from 'react';
import { ReactComponent } from '../img/like.svg';
import { BsCart4 } from 'react-icons/bs';
import './product.css';
import { Link } from 'react-router-dom';
export const Product = ({ product }) => {
  return (
    <div className="productpage__conteiner">
      <div className="productpage__img">
        <Link to="/">
          <button className="button__back">Назад</button>
        </Link>
        <titlle>{product.name}</titlle>
        {/* <span className="card__count">
          {!!discount && (
            <span className="card__discount">-{product.discount}%</span>
          )}
        </span> */}
        <img src={product.pictures} alt="шапка" className="product__img" />
      </div>
      <div className="productpage__infa">
        <p className="productpage__price">{product.price}&nbsp;p</p>
        <button className="card__button">
          {' '}
          <BsCart4 className="card__icons" />
        </button>
        <button
          className="card__like card__like_active post__like"
          type="button"
        >
          <ReactComponent />
        </button>
      </div>
      <div className="productpage__description">
        <titlle className="postpage__titlle">Описание</titlle>
        <p>{product.description}</p>
        <titlle className="postpage__reviews">Отзывы</titlle>
        <p>Оставьте свой отзыв</p>
      </div>
    </div>
  );
};
