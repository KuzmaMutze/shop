import React, { ReactNode } from 'react';
import classes from './Tag.module.css';
import cn from 'classnames';

type PropsType = {
  children: ReactNode;
  size?: 'xl' | 'l';
  color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary';
  href?: string;
};
export const Tag: React.FC<PropsType> = ({ children, size = 'x', color = 'ghost', href }) => {
  return (
    <div
      className={cn(classes.tag, classes[size], {
        [classes.ghost]: color === 'ghost',
        [classes.red]: color === 'red',
        [classes.gray]: color === 'gray',
        [classes.green]: color === 'green',
        [classes.primary]: color === 'primary',
      })}>
      {href ? <a href={href}>{children}</a> : <React.Fragment>{children}</React.Fragment>}
    </div>
  );
};
