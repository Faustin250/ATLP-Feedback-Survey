import React from 'react'
import ReactDOM from 'react-dom';
import './tailwindcss.css';
import App from './App';
import "@fortawesome/fontawesome-free/css/all.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookSquare, faTwitterSquare, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
library.add(faFacebookSquare, faTwitterSquare, faGithubSquare);



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);