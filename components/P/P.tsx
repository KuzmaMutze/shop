import React, { ReactNode } from 'react';
import classes from './P.module.css';

type PropsType = {
  children: ReactNode;
  size?: 'xl' | 'l' | 'm';
};
export const P: React.FC<PropsType> = ({ children, size = 'l' }) => {
  return <p className={classes[size]}>{children}</p>;
};
