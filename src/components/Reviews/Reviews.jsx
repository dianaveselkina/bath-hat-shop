import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import './reviews.css';

const timeOptions = {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
};
export const Reviews = ({ product, sendReview }) => {
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

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="page__reviews">
      <span className="titlle__reviews">Отзывы</span>
      <button onClick={() => setShowForm(true)} className="button__reviews">
        Оставить отзыв
      </button>
      {showForm && (
        <form className="form__reviews" onSubmit={handleSubmit(sendReview)}>
          Rate Component
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
        {product.reviews.map((e) => (
          <div key={e._id}>
            {' '}
            <div className="name__reviews">
              <div className="reviews__item">
                <span className="author__reviews"> {e.author.name}</span>
                <span className="date__reviews">
                  {' '}
                  {new Date(e.created_at).toLocaleString('ru-RU', timeOptions)}
                </span>
              </div>
              <div className="rating">
                {new Array(e?.rating ?? 1).fill('X')}
              </div>
              <div className="text__reviews">{e.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
