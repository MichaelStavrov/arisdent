import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../layouts/Header';
import classes from './App.module.css';
import About from '../../pages/About';
import Footer from '../layouts/Footer';

const App: FC = () => {
  return (
    <div className={classes.app}>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={About} />
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
