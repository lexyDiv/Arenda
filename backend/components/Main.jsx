/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');
const NavBar = require('./NavBar');
const CardList = require('./CardsList');

function Main({ title }) {
  return (
    <Layout title={title}>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous" />
      <script defer src="main/index.js" />

      <NavBar />

      <CardList />

    </Layout>
  );
}

module.exports = Main;
