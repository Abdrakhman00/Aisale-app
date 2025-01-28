
/// --------------------  Авторизация ----------------------------------
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './login.css'; // Подключите ваш CSS-файл

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    setErrorMessage('');
    
    try {
      // Здесь можно отправить данные на сервер
      console.log('Отправка данных:', data);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Фейковая задержка
      // Если всё успешно, перенаправляем пользователя:
      alert('Успешный вход!');
    } catch (error) {
      setErrorMessage('Не удалось войти. Проверьте данные.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Вход в аккаунт</h1>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-container">
            <input
              type="email"
              className={`input-field ${errors.email ? 'error-border' : ''}`}
              placeholder="Введите email"
              {...register('email', {
                required: 'Email обязателен',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Введите корректный email',
                },
              })}
            />
            {errors.email && <span className="error-text">{errors.email.message}</span>}
          </div>
          <div className="input-container">
            <input
              type="password"
              className={`input-field ${errors.password ? 'error-border' : ''}`}
              placeholder="Введите пароль"
              {...register('password', {
                required: 'Пароль обязателен',
                minLength: {
                  value: 6,
                  message: 'Пароль должен содержать минимум 6 символов',
                },
              })}
            />
            {errors.password && <span className="error-text">{errors.password.message}</span>}
          </div>
          <button type="submit" className="login-btn" disabled={isLoading}>
            {isLoading ? 'Загрузка...' : 'Войти'}
          </button>
        </form>
        <div className="login-links">
          <span>Нет аккаунта?</span>
          <a href="/register">Зарегистрироваться</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
