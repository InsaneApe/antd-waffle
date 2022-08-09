import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@fengbeans/antd-waffle/dist/antd-waffle.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);
