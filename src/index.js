import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import {Router} from "react-router-dom";
import {createBrowserHistory} from "history"

export const history = createBrowserHistory();
ReactDOM.render(
  <Router history={history}>
      {/* <ScrollToTop> */}
          <App />
      {/* </ScrollToTop> */}
  </Router>,
  /*
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  */
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
