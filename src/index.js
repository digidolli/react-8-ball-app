import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css"
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode> 
    <App />
    <footer>
        This project was coded by <a href="https://www.instagram.com/digidolli/" target="_blank" rel="noreferrer">digidolli</a> and is <a href="https://github.com/digidolli/react-8-ball-app" target="_blank" rel="noreferrer"> open-sourced on Github </a> 
      </footer>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
