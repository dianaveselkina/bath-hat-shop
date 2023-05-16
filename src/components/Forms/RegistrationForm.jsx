import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import './registrationform.css';
import { BsEyeFill } from 'react-icons/bs';
import { BsEyeSlashFill } from 'react-icons/bs';

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [type, setType] = useState(true);

  const sendData = (data) => {
    console.log({ data });
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
      <h3>Registration form</h3>
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
            type="email"
            {...register('email', emailRegister)}
            placeholder="ivanov@mail.ru"
          />
          {errors?.email && <span>{errors?.email.message}</span>}
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
            className={`registration__input__icon`}
          >
            {type ? <BsEyeFill /> : <BsEyeSlashFill />}
          </span>

          {errors?.password && <span> {errors?.password.message}</span>}
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
