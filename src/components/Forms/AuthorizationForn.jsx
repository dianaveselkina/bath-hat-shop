import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import './form.css';
import { BsEyeFill } from 'react-icons/bs';
import { BsEyeSlashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { api } from '../../utils/api';
export const AuthorizationForm = ({ isRequired = true, setResponse }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [type, setType] = useState(true);

  const sendData = async (data) => {
    console.log(data);
    try {
      const res = await api.authorizationUser(data);
      setResponse(res);
      alert(res.data.name);
      localStorage.setItem('token', res.token);
    } catch (error) {
      alert('Введен неверный пароль или электронная почта');
    }
  };
  const emailRegister = {
    required: {
      value: isRequired,
      message: 'Введите email',
    },
  };
  const passwordRegister = {
    required: {
      value: isRequired,
      message: 'Введите пароль',
    },
  };
  return (
    <div className="registration">
      <h2>Авторизация</h2>
      <form className="registration__form" onSubmit={handleSubmit(sendData)}>
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
            className="authorization__input__icon"
          >
            {type ? <BsEyeFill /> : <BsEyeSlashFill />}
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
            Авторизоваться
          </button>
          <div className="registration__transition">
            <Link to="/registrationform">
              <button className="registration__button" type="submit">
                Регистрация
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
