import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

import classes from './NotFound.module.css';

const NotFound: FC = () => {
  return (
    <>
      <Helmet>
        <meta name='prerender-status-code' content='404' />
        <title>404</title>
      </Helmet>
      <h1 className={classes.notFound}>
        Такой страницы не существует, перейдите на главную страницу
      </h1>
    </>
  );
};

export default NotFound;
