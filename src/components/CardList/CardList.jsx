import React from 'react';
import { Card } from '../Card/Card';
import './cardlist.css';
export const CardList = ({ cards }) => {
  console.log({ ...cards });
  return (
    <div className="cardlist">
      <div className="cards">
        {cards.map((item) => {
          return <Card key={item.updated_at} {...item} product={item} />;
        })}
      </div>
    </div>
  );
};
