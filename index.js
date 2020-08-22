const admin = require('firebase-admin');

admin.initializeApp({
  serviceAccountId: 'pc-719@plenary-glass-237912.iam.gserviceaccount.com'
});

const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('POST method is required to use this app.');
});

app.post('/', (req, res) => {
  console.log(req.body);
  const token = req.body.token;
  console.log(`Received token ${token}.`);

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