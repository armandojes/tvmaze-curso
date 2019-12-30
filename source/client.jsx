import App from './app';
import {hydrate} from 'react-dom';
import React from 'react';  
import {BrowserRouter} from 'react-router-dom';

hydrate(
<BrowserRouter>
  <App />
</BrowserRouter>
,document.getElementById('render_target'));