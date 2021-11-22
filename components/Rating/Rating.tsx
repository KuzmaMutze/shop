import React, { useEffect, useState, KeyboardEvent } from 'react';
import classes from './Rating.module.css';
import StarIcon from './Star.svg';
import cn from 'classnames';

type PropsType = {
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => void;
};
export const Rating: React.FC<PropsType> = ({ isEditable = true, rating, setRating }) => {
  const [ratingArray, setRattingArray] = useState(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };

  const changeRateOnIcon = (i: number) => {
    if (!setRating || !isEditable) {
      return;
    }
    setRating(i);
  };

  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code != 'Space' || !setRating) {
      return;
    }
    setRating(i);
  };

  const constructRating = (currentRating: number) => {
    const updateRating = ratingArray.map((_, i) => {
      return (
        <span
          key={i}
          className={cn(classes.star, {
            [classes.filled]: i < currentRating,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => changeRateOnIcon(i + 1)}>
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
          />
        </span>
      );
    });
    setRattingArray(updateRating);
  };

  return (
    <div className={classes.wrapper}>
      {ratingArray.map((rate, i) => (
        <span key={i}>{rate}</span>
      ))}
    </div>
  );
};
