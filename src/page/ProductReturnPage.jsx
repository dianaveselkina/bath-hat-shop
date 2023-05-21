import React from 'react';
import { Link } from 'react-router-dom';
import './page.css';
export const ProductReturnPage = () => {
  return (
    <>
      <div className="productcarepage__conteiner">
        <Link to="/">
          <button className="button__main">На главную</button>
        </Link>
        <div className="productcarepage__info">
          <span className="productcarepage__title">Обмен и возврат товара</span>
          <p className="productcarepage__text">
            Если вы заказали товар в интернет-магазине, но еще не успели его
            получить, вы можете отказаться от него в любой момент. Если
            предварительно товар был уже оплачен, продавец обязан вернуть
            потраченные вами средства. Исключение составляют товары,
            изготовленные специально для вас на заказ, — отказаться от них
            нельзя.
            <br />
            Вы можете вернуть любой товар, приобретенный в интернет-магазине, но
            только в том случае, если сохранены его товарный вид и
            потребительские свойства.
          </p>
        </div>
      </div>
    </>
  );
};
