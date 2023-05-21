import React from 'react';
import { Rating } from '../Rating/Rating';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { BsTrash3 } from 'react-icons/bs';
import './reviews.css';

const timeOptions = {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
};

export const Reviews = ({ product, sendReview, onDeleteReview, user }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onBlur' });
  const reviewRegister = {
    required: {
      value: true,
      message: 'Обязательное поле для заполнения',
    },
  };
  const onSendFromReview = (data) => {
    sendReview(data);
    reset();
    setShowForm(false);
  };

  const [showForm, setShowForm] = useState(false);
  const [rate, setRate] = useState(3);
  return (
    <div className="page__reviews">
      <span className="title__reviews">Отзывы</span>
      <button onClick={() => setShowForm(true)} className="button__reviews">
        Оставить отзыв
      </button>
      {showForm && (
        <form
          className="form__reviews"
          onSubmit={handleSubmit(onSendFromReview)}
        >
          <Rating rating={rate} setRate={setRate} isEditable={true} />
          <textarea
            {...register('text', reviewRegister)}
            type="text"
            placeholder="Оставьте ваш отзыв"
            className="form__input"
          />
          <button type="submit">Отправить</button>
        </form>
      )}
      <div className="list__reviews">
        <div className="reviews__hr" />
        {product.reviews
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .map((e) => (
            <div key={e._id}>
              {' '}
              <div className="name__reviews">
                <div className="reviews__item">
                  <span className="author__reviews"> {e.author.name}</span>
                  <span className="date__reviews">
                    {' '}
                    {new Date(e.created_at).toLocaleString(
                      'ru-RU',
                      timeOptions
                    )}
                    {user?._id !== e.author._id && (
                      <BsTrash3
                        onClick={() => onDeleteReview(e._id)}
                        className="reviews__bascet"
                      />
                    )}
                  </span>
                </div>
                <div className="rating">
                  <Rating rating={e.rating} />
                </div>
                <div className="text__reviews">{e.text}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
