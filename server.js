require('dotenv').config();

const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT;

console.log("TEST_VAL:", process.env.TEST_VAL);

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(PORT, error => (
  error
    ? console.error(error)
    : console.info(`Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
));