/* eslint-disable no-nested-ternary */
const React = require('react');

// eslint-disable-next-line react/prop-types
function Layout({ title, children }) {
  const cssPath = title === 'wc' ? 'wc.css' : title === 'Boulder Dash' ? 'boulder.css' : 'index.css';
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href={cssPath} />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
        <title>{title}</title>
      </head>
      <body id="body">{children}</body>
    </html>
  );
}

module.exports = Layout;
