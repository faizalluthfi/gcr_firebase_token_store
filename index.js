const admin = require('firebase-admin');

admin.initializeApp();

const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('POST method is required to use this app.');
});

app.post('/', (req, res) => {
  console.log(req.body);
  const uid = req.body.uid;
  console.log(`Received token ${uid}.`);

  admin.auth().createCustomToken(uid)
    .then(function(customToken) {
      res.send(uid);
    })
    .catch(function(error) {
      console.log(`Error storing token ${uid}.`, error);
      res.send(`Error storing token ${uid}.`);
    });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Listening on port', port);
});