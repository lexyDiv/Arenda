const React = require('react');
const ReactDomServer = require('react-dom/server');

// eslint-disable-next-line consistent-return
function renderComponent(reactComponent, props = {}, options = { htmlOnly: false }) {
  const reactElement = React.createElement(reactComponent, props);
  const html = ReactDomServer.renderToStaticMarkup(reactElement);

  if (options.htmlOnly) {
    return html;
  }

  const document = `<!DOCTYPE html/> ${html}`;
  this.send(document);
}

function ssr(_, res, next) {
  res.renderComponent = renderComponent;
  next();
}

module.exports = ssr;
