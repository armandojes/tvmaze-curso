import React from 'react';

function Markup (props){
  return (
    <html lang="en">
    <head>
      <base href="http://localhost:8080" />
      <meta charSet="UTF-8" />
      <title>Tvmaze</title>
      <link rel="stylesheet" href="/public/styles.css" />
    </head>
    <body>
      <div id="render_target" dangerouslySetInnerHTML={{__html: props.aplication }}></div>
      <script dangerouslySetInnerHTML={{__html: props.states}} />
      <script src="/public/client.js"></script>
    </body>
    </html>
  )
}

export default Markup;