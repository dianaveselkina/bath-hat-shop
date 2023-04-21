import './search.css';

export const Search = ({ setSearch }) => {
  return (
    <input
      placeholder="Найти..."
      onChange={(e) => setSearch(e.target.value)}
      className="search__input"
    />
  );
};
