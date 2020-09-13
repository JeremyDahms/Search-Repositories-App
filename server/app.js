const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const port = 9000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/query-repositories', (req, res) => {
  const baseUrl = 'https://api.github.com/search/repositories?q=';

  const query = req.query.searchTerm;
  const url = baseUrl + query;

  fetch(url)
    .then((res) => res.json())
    .then((searchResults) => {
      res.setHeader('Content-Type', 'application/json');
      res.send(searchResults);
    });
});

app.listen(port, () =>
  console.log(`Express server is running on port ${port}!`)
);
