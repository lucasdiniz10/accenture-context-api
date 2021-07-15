import React from 'react';
import ReactDOM from 'react-dom';
import { ToogleProvider } from "./contexts/ToogleProvider";
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ToogleProvider>
      <App />
    </ToogleProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
