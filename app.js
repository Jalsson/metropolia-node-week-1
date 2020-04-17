const express = require('express')
const app = express()
const port = 3000
const https = require('https');
const http = require('http');
const httpsPort= 8000
const path = require('path')
app.use(express.static('public'))

const fs = require('fs');
const sslkey = fs.readFileSync('ssl-key.pem');
const sslcert = fs.readFileSync('ssl-cert.pem')

const options = {
  key: sslkey,
  cert: sslcert
};

http.createServer((req, res) => {
  res.writeHead(301, { 'Location': 'https://localhost:8000/secure' + req.url });
  res.end();
}).listen(3000);

https.createServer(options, app).listen(httpsPort);


app.get('/secure', (req, res) => {
  res.send(`Hello Secure World! ${req.secure}`);
});

app.get('/catinfo', (req, res) => {
    const cat = {
      'name': 'Frank',
      'age': 6,
      'weight': 5,
    };
    res.json(cat);
  });

  module.exports = (app, httpsPort, httpPort) => {
    https.createServer(options, app).listen(httpsPort);
    http.createServer(httpsRedirect).listen(httpPort);
   };