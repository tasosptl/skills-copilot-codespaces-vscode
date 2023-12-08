// Create web server
// 1. create a web server using express
// 2. create a route handler for get requests to the route '/'
// 3. send back some html saying 'Hi there!'
// 4. listen on a port on our machine

// 1. create a web server using express
const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

// 2. create a route handler for get requests to the route '/'
const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
  // 3. send back some html saying 'Hi there!'
  res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', (req, res) => {
  // 3. send back some html saying 'Hi