import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './form.css';
import { Link } from 'react-router-dom';
import { api } from '../../utils/api';
import { BsEyeFill } from 'react-icons/bs';
import { BsEyeSlashFill } from 'react-icons/bs';

export const PasswordRecoveryForm = () => {
  const [haveToken, setHaveToken] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [type, setType] = useState(true);

  const sendData = async (data) => {
    if (data.token) {
      try {
        const res = await api.passwordRecoveryWithToken(data.token, {
          password: data.password,
        });
        localStorage.setItem('token', res.token);
      } catch (error) {
        alert('Извините, что-то пошло не так');
      }
    } else {
      try {
        const res = await api.passwordRecovery(data);
        console.log(res);
        setHaveToken(true);
      } catch (error) {
        alert('Извините, что-то пошло не так');
      }
    }
  };
  const emailRegister = {
    required: {
      value: true,
      message: 'Введите email',
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
      <h2>Восстановление пароля</h2>
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

        {haveToken ? (
          <>
            <div>
              <input
                className="registration__input"
                type="text"
                {...register('token', { ...emailRegister })}
                placeholder="token"
              />
              {errors?.token && <span> {errors?.token.message}</span>}
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
                className="passwordrecovery__input__icon"
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
          </>
        ) : (
          <></>
        )}
        <div className="control__buttons">
          <button className="registration__button" type="submit">
            Восстановить пароль
          </button>
          <div className="registration__transition">
            <Link to="/registrationform">
              <button className="registration__button" type="submit">
                Регистрация
              </button>
            </Link>
            <Link to="/authorizationform">
              <button className="registration__button" type="submit">
                Войти
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
