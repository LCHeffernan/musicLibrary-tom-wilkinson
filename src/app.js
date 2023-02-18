const express = require('express');
const artistRouter = require('./routes/artist');

const app = express();

app.use(express.json());

app.use('/artists', artistRouter);
app.use('/artists/:id', artistRouter);

module.exports = app;