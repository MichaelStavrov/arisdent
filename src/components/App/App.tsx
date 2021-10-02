import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../layouts/Header';
import classes from './App.module.css';

const App: FC = () => {
  return (
    <div className={classes.app}>
      <Header />
    </div>
  );
};

export default App;
