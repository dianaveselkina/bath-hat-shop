import React from 'react';
import { BsCart4 } from 'react-icons/bs';
import './product.css';
import { Link } from 'react-router-dom';
import { getHats } from '../../utils/utils';
import { Reviews } from '../Reviews/Reviews';
import { Rating } from '../Rating/Rating';

export const Product = ({ product, sendReview, onDeleteReview }) => {
  const productRating = (reviews) => {
    if (!reviews || !reviews.length) {
      return 0;
    }
    const res = reviews.reduce((acc, el) => (acc += el.rating), 0);
    return Math.floor(res / reviews.length);
  };
  return (
    <div className="productpage__conteiner">
      <Link to="/">
        <button className="button__main">На главную</button>
      </Link>
      <div className="productpage__img">
        <title className="productpage__title">{product.name}</title>
        <div className="product__rating">
          <div className="product__star">
            <Rating
              rating={productRating(product.reviews)}
              onDeleteReview={onDeleteReview}
              reviews={product.reviews}
            />
            <span>
              {product.reviews.length}
              {getHats(product.reviews.length, 'отзыв')}
            </span>
          </div>
        </div>
        <img src={product.pictures} alt="шапка" className="product__img" />
        <div className="productpage__description">
          <p className="postpage__title">Описание</p>
          <p className="postpage__description">{product.description}</p>
          <Reviews
            product={product}
            sendReview={sendReview}
            onDeleteReview={onDeleteReview}
          />
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
