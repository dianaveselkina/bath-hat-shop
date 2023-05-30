import React, { useCallback, useEffect, useState } from 'react';
import s from './index.module.scss';
import { ReactComponent as Star } from './star.svg';
import cn from 'classnames';

export const Rating = ({ rating, setRate = () => {}, isEditing = false }) => {
  const emptyStars = new Array(5).fill(<></>);
  const [ratingArray, setratingArray] = useState(emptyStars);

  const changeRating = useCallback(
    (rateStar) => {
      if (!isEditing) {
        return;
      }
      setRate(rateStar);
    },
    [setRate, isEditing]
  );

  const changeDisplay = (rate) => {
    if (!isEditing) {
      return;
    }
    constructRating(rate);
  };

  const constructRating = useCallback(
    (rate) => {
      const updatedArray = ratingArray.map((elem, index) => {
        return (
          <Star
            className={cn(s.star, {
              [s.filled]: index < rate,
              [s.editing]: isEditing,
            })}
            onMouseEnter={() => changeDisplay(index + 1)}
            onMouseLeave={() => changeDisplay(rating)}
            onClick={() => changeRating(index + 1)}
          />
        );
      });
      setratingArray(updatedArray);
    },
    [rating, isEditing]
  );

  useEffect(() => {
    constructRating(rating);
  }, [constructRating]);

  return (
    <div>
      {ratingArray.map((el, i) => (
        <span key={i}>{el}</span>
      ))}
    </div>
  );
};
