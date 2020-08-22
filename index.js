const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('POST method is required to use this app.');
});

app.post('/', (req, res) => {
  const token = req.body.token;
  console.log(`Received token ${token}.`);

  const admin = require('firebase-admin');

  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
  });

  admin.auth().createCustomToken(token)
    .then(function(customToken) {
      res.send(token);
    })
    .catch(function(error) {
      console.log(`Error storing token ${token}.`, error);
      res.send(`Error storing token ${token}.`);
    });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Listening on port', port);
});