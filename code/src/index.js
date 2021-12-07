import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from './components/main';


// The index.js is only used for starting up your application
// For custom component setup see main component!
ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);