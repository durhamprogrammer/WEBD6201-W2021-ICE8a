import http = require("http");
import url = require("url");
import fs = require("fs");

import mime = require("mime-types");

let lookup = mime.lookup;

const PORT:number = 3000;
const HOST:string = "localhost";


const server:http.Server = http.createServer((req:http.IncomingMessage, res:http.ServerResponse) =>
{

  let parsedURL = new URL(req.url, "http://" + HOST + ":" + PORT);

  let path = parsedURL.pathname.replace(/^\/+|\/+$/g, "");

    if (path == "") {
      path = "index.html";
    }
    
  let file = __dirname + "\\" + path;
  fs.readFile(file, function(err, content) {
      if (err) 
      {
        res.writeHead(404);
        res.end();
      } 
      else 
      {
        res.setHeader("X-Content-Type-Options", "nosniff");
        let mime = lookup(path);
        res.writeHead(200, { "Content-type": mime.toString() });
        res.end(content);
      }
    });
});

server.listen(PORT, HOST, () =>{
  console.log(`Listening on port ${PORT}`);
});
