import { useForm } from 'react-hook-form';
import './form.css';
import { Link } from 'react-router-dom';
export const PasswordRecoveryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendData = (data) => {
    console.log({ data });
  };

  const emailRegister = {
    required: {
      value: true,
      message: 'Введите email',
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
