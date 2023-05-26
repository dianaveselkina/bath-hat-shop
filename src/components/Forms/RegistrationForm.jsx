import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import './form.css';
import { BsEyeFill } from 'react-icons/bs';
import { BsEyeSlashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { api } from '../../utils/api';

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });
  const [type, setType] = useState(true);

  const sendData = async (data) => {
    try {
      const res = await api.registrationUser(data);
      console.log(res);
      localStorage.setItem('token', res.token);
    } catch (error) {
      alert('Извините, что-то пошло не так');
    }
  };

  const emailRegister = {
    required: {
      value: true,
      message: 'Введите email',
    },
  };

  const groupRegister = {
    required: {
      value: true,
      message: 'Введите номер группы',
    },
  };

  const passwordRegister = {
    required: {
      value: true,
      message: 'Введите пароль',
    },
    minLength: {
      value: 10,
      message: 'Пароль должен содержать минимум 10 символов',
    },
  };
  return (
    <div className="registration">
      <h2>Регистрация</h2>
      <form className="registration__form" onSubmit={handleSubmit(sendData)}>
        <div>
          <input
            className="registration__input"
            type="text"
            {...register('name')}
            placeholder="Иван Иванов"
          />
        </div>
        <div>
          <input
            className="registration__input"
            type="text"
            {...register('about')}
            placeholder="Посетитель"
          />
        </div>
        <div>
          <input
            className="registration__input"
            type="text"
            {...register('group', groupRegister)}
            placeholder="group-12"
          />
          {errors?.group && (
            <span>
              <br />
              {errors?.group.message}
            </span>
          )}
        </div>
        <div>
          <input
            className="registration__input"
            type="email"
            {...register('email', emailRegister)}
            placeholder="ivanov@mail.ru"
          />
          {errors?.email && (
            <span>
              <br />
              {errors?.email.message}
            </span>
          )}
        </div>
        <div className="input__password">
          <input
            className="registration__input"
            type={!type ? 'password' : 'text'}
            {...register('password', passwordRegister)}
            placeholder="password"
          />
          <span
            onClick={() => setType(!type)}
            className="registration__input__icon"
          >
            {type ? <BsEyeSlashFill /> : <BsEyeFill />}
          </span>

          {errors?.password && (
            <span>
              {' '}
              <br />
              {errors?.password.message}
            </span>
          )}
        </div>
        <div className="control__buttons">
          <button className="registration__button" type="submit">
            Зарегестрироваться
          </button>
          <div className="registration__transition">
            <Link to="/authorizationform">
              <button className="registration__button" type="submit">
                Войти
              </button>
            </Link>
            <Link to="/passwordrecoveryform">
              <button className="registration__button" type="submit">
                Восстановить пароль
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
