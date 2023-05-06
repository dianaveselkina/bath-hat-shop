import React from 'react';
import { BsCart4 } from 'react-icons/bs';
import './card.css';
import { ReactComponent as Like } from './img/like.svg';

import { Link } from 'react-router-dom';

export const Card = ({
  name,
  price,
  pictures,
  image,
  gender,
  likes,
  discount,
  userId,
  product,
  handleLike,
  ...args
}) => {
  const isLiked = likes.some((e) => e === userId);
  const handleClick = () => {
    handleLike(product, isLiked);
  };
  return (
    <div className="card">
      <Link to={`/product/${product._id}`} className="card__link">
        <img src={pictures} alt="шапка" className="card__img" />
        <div className="card__count">
          {!!discount && <span className="card__discount">-{discount}%</span>}
          {args.tags.map((e) => (
            <span className={`tag tag_type_${e}`} key={e}>
              {e}
            </span>
          ))}
          <div className="favorite">
            <button
              onClick={() => console.log('Есть лайк!')}
              className={`card__favorite ${
                isLiked ? 'card__favorite_active' : ''
              }`}
            >
              <Like />
            </button>
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
