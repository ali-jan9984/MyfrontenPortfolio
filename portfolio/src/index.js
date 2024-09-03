import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "@fontsource/outfit";
import "@fontsource/roboto";
import { ReactComponent as CssSvg } from './Assests/css.svg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <CssSvg/>
  </React.StrictMode>
);