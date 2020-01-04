import express from 'express';
import {renderToStaticMarkup } from 'react-dom/server';
import Markup from './markup';
import React from 'react';
import App from '../app';
import {StaticRouter} from 'react-router';
import {renderToStringAsync} from 'react-fetch-ssr';

const server = express();
server.use('/public', express.static('public'));

server.get('*', async (request, response) => {

  const context = {};

  const {content, states} = await renderToStringAsync(
    <StaticRouter location={request.url} context={context}>
      <App />
    </StaticRouter>
  );
  
  const full_html = Markup(content, states);
  response.send(full_html);
  response.end();
})

server.listen(8080);