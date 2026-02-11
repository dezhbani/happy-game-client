import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import UserContext from './contexts/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.baseURL = 'https://happy-game-server.vercel.app';
// for use local API 
// axios.defaults.baseURL = 'http://localhost:2000'; 
root.render(
  <UserContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserContext>
);

