import express = require('express');
const app = express();

const PORT = 3000;
const HOST:string = "localhost";

app.use(express.static('./'));

// displays data based on the default / path
app.get('/', (req, res) => 
{
  res.status(200).send('Hello, World!');
});

app.get('/home', (req, res) => 
{
  res.sendFile('/index.html');


  


});

app.listen(PORT, () => 
{
  console.log(`WEBD6201 listening at http://${HOST}:${PORT}`);
});