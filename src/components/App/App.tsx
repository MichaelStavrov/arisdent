import React, { FC, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../layouts/Header';
import classes from './App.module.css';
import About from '../../pages/About';
import Staff from '../../pages/Staff';
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
          <Route exact path='/' component={About} />
          <Route path='/staff' component={Staff} />
          {/* <Route path='/about' component={AboutMe} />
            <Route path='/services' component={Services} />
            <Route path='/contacts' component={Contacts} />
            <Route path='*' component={NotFound404} /> */}
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
