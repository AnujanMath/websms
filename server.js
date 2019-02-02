const http = require('http');
var bodyParser = require('body-parser')//add this

const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();
app.use(bodyParser())//add this before any route or before using req.body

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  var info = req.body.Body;
  if (info == "hello") {
    twiml.message('waguan sir');

  }
  console.log(info);
  res.writeHead(200, {'Content-Type': 'text/xml'});
  
  res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});
