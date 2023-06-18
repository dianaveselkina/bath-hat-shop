import { useDispatch } from 'react-redux';
import { actions } from '../components/Store/Slices/basketSlice';
import './page.css';
import { Link } from 'react-router-dom';

export const BasketPage = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="basket__conteiner">
                <div className="basket__image"></div>
        <button
          onClick={() =>
            dispatch(actions.addGoods({ product: { _id: 1 }, count: 1 }))
          }
        >
          click
        </button>
        <button
          onClick={() =>
            dispatch(actions.removeGoods({ product: { _id: 1 }, count: 1 }))
          }
        >
          remove
        </button>
        <Link to="/">
          <button className="button__main">На главную</button>
        </Link>
      </div>
    </div>
  );
};
