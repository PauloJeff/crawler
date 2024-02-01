import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, createBrowserRouter } from 'react-router-dom';
import Headers from './components/headers'
import Footers from './components/footers'
import './scss/styles.scss'

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Headers />
      <App />
    <Footers />
  </StrictMode>
);
