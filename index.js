var admin = require('firebase-admin');
const express = require('express');
const app = express();

app.use(express.json());

app.post('/', (req, res) => {
  const token = req.body.token;
  console.log(`Received token ${token}.`);

  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
  });

  admin.auth().createCustomToken(token)
    .then(function(customToken) {
      res.send(token);
    })
    .catch(function(error) {
      console.log(`Error storing token ${token}.`, error);
    });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Listening on port', port);
});