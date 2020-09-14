const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const port = 9000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
var jsonParser = bodyParser.json();

const cache = {};

const responseCachingMiddleware = (req, res, next) => {
  const key = req.url;
  if (cache[key]) {
    res.send(cache[key]);
  } else {
    res.sendResponse = res.send;
    res.send = (body) => {
      cache[key] = body;
      res.sendResponse(body);
    };
    next();
  }
};

app.get('/api/query-repositories', responseCachingMiddleware, (req, res) => {
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

const itemCache = {};

app.post('/api/store-item', jsonParser, (req, res) => {
  const key = req.body.item.id;
  if (!itemCache[key]) {
    itemCache[key] = req.body.item;
  }
  res.status(204).end();
});

app.get('/api/store-item', (req, res) => {
  const key = req.query.id;
  res.setHeader('Content-Type', 'application/json');
  res.send(itemCache[key]);
});

app.listen(port, () =>
  console.log(`Express server is running on port ${port}!`)
);
