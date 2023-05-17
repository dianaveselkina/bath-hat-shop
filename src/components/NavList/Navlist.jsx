import './navlist.css';
export const NavList = () => {
  return (
    <div className="navlist">
      <div className="navlist__image">
        <div>
          <p className="navlist__animation">
            Самые лучшие шапки <br /> для бани <br /> из натуральной шерсти{' '}
            <br /> от Дианы Веселкиной
          </p>
        </div>
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
