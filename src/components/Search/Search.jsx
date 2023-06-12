import { useDispatch } from 'react-redux';
import './search.css';
import { setSearch } from '../Store/Slices/productsSlice';

export const Search = () => {
  const dispatch = useDispatch();

  return (
    <input
      placeholder="Найти..."
      onChange={(e) => dispatch(setSearch(e.target.value))}
      className="search__input"
    />
  );
};
