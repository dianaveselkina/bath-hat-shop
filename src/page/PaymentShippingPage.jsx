import React from 'react';
import { Link } from 'react-router-dom';
import './page.css';
export const PaymentShippingPage = () => {
  return (
    <div className="payment__conteiner">
      <Link to="/">
        <button className="button__main">На главную</button>
      </Link>
      <div className="payment">
        <span className="payment__title">Способы оплаты</span>
        <div className="payment__image"></div>
      </div>
      <div className="shipping">
        <span className="payment__title">Доставка</span>
        <ul className="shipping__infa">
          <li>
            После поступления оплаты отгрузка осуществляется в течение 1-2
            рабочих дней (не учитывая день оплаты заказа).
          </li>
          <li>
            Номер трека или товарно-транспортной накладной посылки будет
            добавлен в личный кабинет и отправлен в смс-оповещении и на e-mail в
            течение 2-х дней после отправки.
          </li>
          <li>
            Ответственность за сохранность заказа во время пересылки несет
            транспортная компания, служба доставки ЕМС и Почта России. При
            получении заказа обя зательно проверяйте целостность упаковки.
          </li>
          <li>
            Согласно Закону "О защите прав потребителей" и "Правилам
            дистанционной продажи" при отказе покупателя от получения товара, он
            обязан оплатить продавцу стоимость доставки.
          </li>
          <li>
            Интернет-магазин «Bath hat» оставляет за собой право выбора
            транспортной компании самостоятельно
          </li>
        </ul>
      </div>
    </div>
  );
};
