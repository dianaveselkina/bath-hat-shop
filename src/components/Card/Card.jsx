import React from 'react';
import { BsCart4 } from 'react-icons/bs';
import './card.css';
export const Card = (props) => {
  return (
    <div className="card">
      <div className="favorite"></div>
      <img
        className="card__img"
        src="https://i.pinimg.com/564x/0e/bd/26/0ebd262c4b7f69f7ec915dbd8509328f.jpg"
      />

      <h3 className="card__titlle">Банная шапка</h3>
      <p className="card__price"> 5500р</p>
      <button className="card__button">
        {' '}
        <BsCart4 className="card__icons" />
      </button>
    </div>
  );
};
