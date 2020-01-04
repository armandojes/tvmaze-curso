import React from 'react';

function markup (content, states){
  return (`
    <html lang="en">
    <head>
      <base href="http://localhost:8080" />
      <meta charSet="UTF-8" />
      <title>Tvmaze ssr</title>
      <link rel="stylesheet" href="/public/styles.css" />
    </head>
    <body>
      <div id="render_target">${content}</div>
      <script defer >${states}</script>
      <script defer src="/public/client.js"></script>
    </body>
    </html>
  `)
}

export default markup;