import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './page.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, changeUser } from '../components/Store/Slices/userSlice';
import { useForm } from 'react-hook-form';

export const UserProfilePage = () => {
  const dispatch = useDispatch();
  const { data: user, loading } = useSelector((s) => s.user);
  const { register, handleSubmit, reset } = useForm({ mode: 'onBlur' });
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const sendData = (data) => {
    dispatch(changeUser(data));
    reset();
  };

  return (
    <>
      {loading || !user._id ? (
        'loading'
      ) : (
        <div className="changeUser__conteiner">
          <Link to="/">
            <button className="button__changeUser">На главную</button>
          </Link>
          <div className="changeUser__avatar">
            <form
              className="changeAvatar__form"
              onSubmit={handleSubmit(sendData)}
            >
              <img
                className="profile__avatar"
                src={user?.avatar}
                alt="avatar"
              />
              <div className="avatar__info">
                <span className="changeUser__text">url ссылка на аватар</span>
                <input
                  className="changeUser__input"
                  type="text"
                  {...register('avatar')}
                  placeholder="Аватар"
                />
                <button className="changeUser__button" type="submit">
                  Обновить
                </button>
              </div>
            </form>
          </div>
          <div>
            <form
              className="changeUser__form"
              onSubmit={handleSubmit(sendData)}
            >
              <div className="changeUser__info">
                <span className="changeUser__text">Ваше имя</span>
                <input
                  className="changeUser__input"
                  type="text"
                  {...register('name')}
                  placeholder="Иван Иванов"
                />
                <span className="changeUser__text">Немного о себе</span>

                <input
                  className="changeUser__input"
                  type="text"
                  {...register('about')}
                  placeholder="Посетитель"
                />
                <button className="changeUser__button" type="submit">
                  Обновить
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
