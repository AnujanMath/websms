// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'AC7aa9286882b5a6f18ba7ad242a29a20e';
const authToken = '1b8c6d61450e5af67a918e9f9155f3c1';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'arman is a pussy',
     from: '+16475594981',
     to: '+14165241046'
   })
  .then(message => console.log(message.sid))
  .done();
