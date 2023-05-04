import React from 'react';
import { BsCart4 } from 'react-icons/bs';
import './card.css';
import { ReactComponent as Like } from '../img/like.svg';
import { Link } from 'react-router-dom';

export const Card = ({ name, price, pictures, discount, product, ...args }) => {
  return (
    <div className="card">
      <Link to={`/product/${product._id}`} className="card__link">
        <img src={pictures} alt="шапка" className="card__img" />
        <div className="card__count">
          {!!discount && <span className="card__discount">-{discount}%</span>}
          <div className="favorite">
            {' '}
            <Like />
          </div>
        </div>
        <h3 className="card__titlle">{name}</h3>
        <p className="card__price"> {price}&nbsp;p</p>
        <button className="card__button">
          {' '}
          <BsCart4 className="card__icons" />
        </button>
      </Link>
    </div>
  );
};
