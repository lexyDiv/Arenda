/* eslint-disable func-names */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
const React = require('react');

const NavBar = function () {
  // https://github.com/lexyDiv/show-games/tree/dev

  return (

    <nav className="navbar my-nav">
      <div>
        <img className="nav-item" id="photo" src="main/bug.jpg" alt="img" />

        <a className="nav-item" href="https://web.telegram.org/k/#@LexyDivin">@LexyDivin</a>
        <a className="nav-item" href="https://github.com/lexyDiv/show-games/tree/dev">GitHub</a>

      </div>
    </nav>

  );
};

module.exports = NavBar;
