import React, { FC } from 'react';
import classes from './Container.module.css';

const Container: FC = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export default Container;
