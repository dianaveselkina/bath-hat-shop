import React from 'react';
import logoDV from './logo.svg';
import './index.css';

export const Logo = () => {
  return (
    <a href="/">
      <img src={logoDV} alt="logo" className="logo-image" />
    </a>
  );
};
