import { BsCart4 } from 'react-icons/bs';
import './card.css';
import { ReactComponent as Like } from './img/like.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChangeProductLike } from '../Store/Slices/productsSlice';

export const Card = ({
  name,
  price,
  pictures,
  image,
  gender,
  likes,
  discount,
  product,
  ...args
}) => {
  const { data: user } = useSelector((s) => s.user);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchChangeProductLike({ product: product, wasLiked: isLiked }));
  };
  const isLiked = likes.some((e) => e === user._id);

  return (
    <div className="card">
      <div className="card__count">
        {!!discount && <span className="card__discount">-{discount}%</span>}
        {args.tags.map((e) => (
          <span className={`tag tag_type_${e}`} key={e}>
            {e}
          </span>
        ))}
        <div className="favorite">
          <button
            onClick={handleClick}
            className={`card__favorite ${
              isLiked ? 'card__favorite_active' : ''
            }`}
          >
            <Like />
          </button>
        </div>
      </div>
      <Link to={`/product/${product._id}`} className="card__link">
        <img src={pictures} alt="шапка" className="card__img" />
        <h3 className="card__title">{name}</h3>
        <p className="card__price"> {price}&nbsp;p</p>
        <button className="card__button">
          {' '}
          <BsCart4 className="card__icons" />
        </button>
      </Link>
    </div>
  );
};
