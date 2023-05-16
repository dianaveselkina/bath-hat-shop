import React from 'react';
import { Link } from 'react-router-dom';
import './errorpage.css';
export const ErrorPage = () => {
  return (
    <>
      <div className="err__conteiner">
        <Link to="/">
          <button className="button__main">На главную</button>
        </Link>
        <div className="err__image"></div>
      </div>
    </>
  );
};
