require('dotenv').config({path: './server.env'});

const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(PORT, error => (
  error
    ? console.error(error)
    : console.info(`Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
));