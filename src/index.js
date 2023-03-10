import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FetchContext from './components/context/FetchContext';
import { BrowserRouter as Router } from "react-router-dom";
import ContextForm from './components/context/FormContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <FetchContext>
        <ContextForm>
          <Router>
            <App />
          </Router>
        </ContextForm>
      </FetchContext>
      
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
