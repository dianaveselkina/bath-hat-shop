import { Card } from '../Card/Card';
import './cardlist.css';
export const CardList = (props) => {
  return (
    <div className="cardlist">
      <div className="cardlist__image"></div>
      <div className="cardlist__nav">
        <ul className="nav__list">
          <li>Каталог</li>
          <li>Женские шапки</li>
          <li>Мужские шапки</li>
          <li>Детские шапки</li>
          <li>Новинки</li>
          <li>Sale</li>
        </ul>
      </div>
      <div className="cardlist__card">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
