import React from 'react';
import { render, hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { YMaps } from '@pbe/react-yandex-maps';

import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
if (rootElement?.hasChildNodes()) {
  hydrate(
    <BrowserRouter>
      <YMaps>
        <App />
      </YMaps>
    </BrowserRouter>,
    rootElement
  );
} else {
  render(
    <BrowserRouter>
      <YMaps>
        <App />
      </YMaps>
    </BrowserRouter>,
    rootElement
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
