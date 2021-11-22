import React, { ReactNode } from 'react';
import classes from './HTag.module.css';

type PropsType = {
  tag: 'h1' | 'h2' | 'h3';
  children: ReactNode;
};
export const HTag: React.FC<PropsType> = ({ tag, children }) => {
  return (
    <React.Fragment>
      {tag === 'h1' && <h1 className={classes.h1}>{children}</h1>}
      {tag === 'h2' && <h2 className={classes.h2}>{children}</h2>}
      {tag === 'h3' && <h3 className={classes.h3}>{children}</h3>}
    </React.Fragment>
  );
};
