import React from 'react';
import logoDF from './logo.svg';
import './logo.css';

export const Logo = () => {
  return (
    <a href="/">
      <img src={logoDF} alt="logo" className="logo-img" />
    </a>
  );
};
