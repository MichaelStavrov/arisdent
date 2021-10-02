import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import classes from './Logo.module.css';
import iconLogo from '../../assets/images/logo.svg';
import { LogoProps } from './types';

const Logo: FC<LogoProps> = ({ menuView }) => {
  return (
    <Link
      className={classes.logoContainer}
      style={
        menuView
          ? {
              margin: 0,
              paddingBottom: 15,
              borderBottom: '1px solid var(--primary-color)',
            }
          : {}
      }
      to='/'
    >
      <div className={classes.logoWithTitle}>
        <div className={classes.iconLogoWrapper}>
          <img
            className={classes.iconLogo}
            style={menuView ? { width: 34, height: 46 } : {}}
            src={iconLogo}
            alt='логотип Арисдент'
          />
        </div>
        <p className={classes.title} style={{ fontSize: menuView ? 36 : '' }}>
          Арисдент
        </p>
      </div>
      <p className={classes.subTitle} style={{ fontSize: menuView ? 14 : '' }}>
        Стоматологическая клиника
      </p>
    </Link>
  );
};

export default Logo;
