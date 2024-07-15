/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const sessionsConfig = require('./sessionConfig');

const serverConfig = (app) => {
  app.use(express.json({ limit: '100mb' }));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(__dirname));
  app.use(express.static(path.resolve(__dirname, 'public')));
  app.use(cookieParser());
  app.use(session(sessionsConfig));
};

module.exports = serverConfig;
