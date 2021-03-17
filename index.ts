// pre-bundled modules
import path = require('path');
import fs = require('fs');


// 3rd-party modules
import express = require('express');
import { ServerResponse } from 'node:http';
const app = express();

const PORT = normalizePort(process.env.PORT || '3000');
const HOST:string = "localhost";

// add static folders to the path
app.use(express.static(path.join(__dirname, '/Client')));
app.use(express.static(path.join(__dirname, '/node_modules')));
app.use(express.static(path.join(__dirname, '/Views')));


function normalizePort(val:string) :number | string | boolean
{
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}



// display home - named function
function displaySPA(res:ServerResponse)
{
// default controller
fs.readFile(__dirname + "/index.html", (err, data) => 
{
  if(err)
  {
    res.writeHead(404);
    res.end(JSON.stringify(err));
    return;
  }
    res.writeHead(200);
    res.end(data);
});
}

// home route
app.get('/', (req, res) => {

  displaySPA(res);
});


app.get('/home', (req, res) => {

  displaySPA(res);
});

app.get('/about', (req, res) => {

  displaySPA(res);
});

app.get('/services', (req, res) => {

  displaySPA(res);
});

app.get('/contact', (req, res) => {

  displaySPA(res);
});

app.get('/contact-list', (req, res) => {

  displaySPA(res);
});

app.get('/projects', (req, res) => {

  displaySPA(res);
});

app.get('/register', (req, res) => {

  displaySPA(res);
});

app.get('/login', (req, res) => {

  displaySPA(res);
});

app.get('/edit', (req, res) => {

  displaySPA(res);
});

app.get('*', (req, res) => {
  // wildcard controller
  displaySPA(res);
});

app.listen(PORT, () => 
{
  console.log(`WEBD6201 listening at http://${HOST}:${PORT}`);
});