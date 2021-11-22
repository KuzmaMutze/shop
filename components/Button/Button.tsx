import React, { ReactNode } from 'react';
import classes from './Button.module.css';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';

type PropsType = {
  children: ReactNode;
  appearance: 'primary' | 'ghost';
  arrow: 'right' | 'down' | 'none';
  onCLick: () => void;
};
export const Button: React.FC<PropsType> = ({ children, appearance, arrow }) => {
  return (
    <button
      className={cn(classes.btn, {
        [classes.primary]: appearance === 'primary',
        [classes.ghost]: appearance === 'ghost',
      })}>
      {children}
      {arrow !== 'none' && (
        <span
          className={cn(classes.arrow, {
            [classes.down]: arrow === 'down',
            [classes.right]: arrow === 'right',
          })}>
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
