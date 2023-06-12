import './page.css';
import { CardList } from '../components/CardList/CardList';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const FavoritePage = () => {
  const { favorites } = useSelector((s) => s.products);
  return (
    <div className="favoritepage__conteiner">
      <h1 className="favorites__title">Избранное</h1>
      <CardList cards={favorites} />
      <Link to="/">
        <button className="button__main">На главную</button>
      </Link>
    </div>
  );
};
