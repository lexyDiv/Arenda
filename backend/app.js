/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
require('@babel/register');
// const path = require('path');
const serverConfig = require('./serverConfig/serverConfig');

const app = express();

serverConfig(app);

const mainRoutes = require('./routes/api/main.routes');
const usersRoutes = require('./routes/api/users.routes');

const ssr = require('./middleweres/renedrComponent');

app.use(ssr);
app.use('/', mainRoutes);
app.use('/users', usersRoutes);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`server on port ${PORT}`);
});
