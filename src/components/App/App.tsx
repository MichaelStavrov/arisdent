import React, { FC, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../layouts/Header';
import classes from './App.module.css';
import About from '../../pages/About';
import Staff from '../../pages/Staff';
import Prices from '../../pages/Prices';
import Contacts from '../../pages/Contacts';
import NotFound from '../../pages/NotFound';
import Footer from '../layouts/Footer';
import { ReactComponent as ArrowUp } from '../../assets/images/arrowUp.svg';

const App: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={classes.app}>
      <button
        className={classes.btnToTop}
        style={{ display: isVisible ? 'block' : 'none' }}
        onClick={scrollToTop}
      >
        <ArrowUp className={classes.arrowToTop} />
      </button>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={Contacts} />
          <Route path='/about' component={About} />
          <Route path='/staff' component={Staff} />
          <Route path='/prices' component={Prices} />
          <Route path='*' component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
