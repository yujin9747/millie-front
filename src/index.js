import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
import { createProxyMiddleware } from 'http-proxy-middleware';

const proxy = require('./setupProxy');

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
