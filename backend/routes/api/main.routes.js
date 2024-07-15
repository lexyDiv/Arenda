/* eslint-disable import/no-extraneous-dependencies */
const router = require('express').Router();
// const Main = require('../../components/Main');

router.get('/', (req, res) => {
  res.json({ text: 'Papa loh !' });
});

module.exports = router;
