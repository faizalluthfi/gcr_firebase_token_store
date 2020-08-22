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
  console.log(`Received uid ${uid}.`);

  admin.auth().createCustomToken(`${uid}`)
    .then(function(customToken) {
      res.send(customToken);
    })
    .catch(function(error) {
      console.log(`Error storing uid ${uid}.`, error);
      next(error);
    });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Listening on port', port);
});