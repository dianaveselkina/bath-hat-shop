import './navlist.css';
export const NavList = () => {
  return (
    <div className="navlist">
      <div className="navlist__image">
        <p className="navlist__animation">
          Самые лучшие шапки для бани из натуральной шерсти от Дианы Веселкиной
        </p>
      </div>
      <div className="navlist__nav">
        <ul className="nav__list">
          <li>Каталог</li>
          <li>Женские шапки</li>
          <li>Мужские шапки</li>
          <li>Детские шапки</li>
          <li>Новинки</li>
          <li>Sale</li>
        </ul>
      </div>
    </div>
  );
};
