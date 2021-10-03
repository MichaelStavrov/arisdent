import React, { FC } from 'react';
import ContactsComponent from '../../ContactsComponent';
import Container from '../Container';

import classes from './Footer.module.css';

const Footer: FC = () => {
  return (
    <footer>
      <Container>
        <div className={classes.content}>
          <div className={classes.address}>
            <p>
              г. Москва, Метро Верхние Лихоборы,
              <br /> Бескудниковский бульвар, д. 2, корп. 1
            </p>
          </div>
          <ContactsComponent dir='horizontal' />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
